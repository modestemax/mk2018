const _ = require('lodash');
const shell = require('shelljs');
const fs = require('fs');
const { 'proces-verbaux': procesVerbaux } = require('../import-export/ballots_stat/proces-verbaux');
const header = [
  'COUNCIL_NAME',
  'POLLING_STATION',
  'inscrits',
  'votants',
  'votes',
  'nuls',
  'blancs',
  'biya',
  'garga',
  'kamto',
  'cabral',
  'matomba',
  'akere',
  'ndam',
  'ndifor',
  'osih'
];
const sheets = [];

let pvList = _.groupBy(procesVerbaux, 'council_id');

pvList = _.map(pvList, (pvs, council_id) => {

  let sheet = [[unSnake(council_id),
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '']].concat(_.map(pvs, pv => {
    return [
      unSnake(pv.council_id),
      unSnake(pv.pool_id),
      pv.procesVerbal.inscrits,
      pv.procesVerbal.votants,
      pv.procesVerbal.votes,
      pv.procesVerbal.nuls,
      pv.procesVerbal.blancs,
      pv.procesVerbal.biya,
      pv.procesVerbal.garga,
      pv.procesVerbal.kamto,
      pv.procesVerbal.cabral,
      pv.procesVerbal.matomba,
      pv.procesVerbal.akere,
      pv.procesVerbal.ndam,
      pv.procesVerbal.ndifor,
      pv.procesVerbal.osih,
    ]
  }));
  const { region_id, division_id } = _.first(pvs);
  sheets.push({ council_id, sheet, region_id, division_id });
  return sheet;
});

pvList = _.flatten(pvList);
save(pvList, 'csv', 'all_pv');

function save(pvList, dirname, filename) {
  pvList = [header].concat(pvList);
  let csv = pvList.map(pv => pv.join(','));
  let txt = csv.join('\n');
  fs.writeFileSync(`${dirname}/${filename}.csv`, txt, 'utf8');
}

saveSheets(sheets);

_.forEach(_.groupBy(sheets, 'division_id'), (sheets, division_id) => {
  saveSheets(sheets, division_id)
});

_.forEach(_.groupBy(sheets, 'region_id'), (sheets, region_id) => {
  saveSheets(sheets, region_id)
});


function unSnake(txt) {
  return _.startCase(txt);
}

function saveSheets(sheets, dir = 'national') {

  let dirname = `${__dirname}/csv/${dir}`;
  try {
    fs.mkdirSync(dirname);
  } catch (e) {
  }
  sheets.forEach(({ council_id, sheet }) => {
    save(sheet, dirname, council_id);

  });
  shell.cd(`${__dirname}/csv`);
  if (shell.exec(`ssconvert --merge-to=${dir}.xls ${dir}/*.csv`).code) {
    shell.exec(`ssconvert -T Gnumeric_Excel:xlsx  ${dir}/*.csv ${dir}.xlsx`)
  }
}
