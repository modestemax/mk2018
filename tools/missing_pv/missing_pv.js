const shell = require('shelljs');
const fs = require('fs');
const _ = require('lodash');
const allPools = require('../csv_bureaux_votes_to_json/data');
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

const division_name = 'mfoundi';

const selectedPools = _.filter(allPools, pool => _.toLower(pool.DIVISION_NAME) === _.toLower(division_name));
const selectedPV = _.filter(procesVerbaux, pv => _.toLower(pv.division_id) === _.toLower(division_name));


const poolsMissingPV = _.reduce(selectedPools, (missing, pool) => {

  if (!_.find(selectedPV, pv => _.toLower(_.startCase(_.snakeCase((pv.pool_id)))) === _.toLower(_.startCase(_.snakeCase(pool.POLLING_STATION))))) {
    return [...missing, pool];
  }
  return missing;
}, []);

saveCSV(poolsMissingPV);

debugger;


function saveCSV(poolsMissingPV){
  let txt=_.map(poolsMissingPV,pool=>[pool.COUNCIL_NAME,pool.POLLING_STATION,'','','','','','','','','','','','','',''])
  save(txt,__dirname+'/missings',division_name);
  debugger
}

function save(pvList, dirname, filename) {
  pvList = [header].concat(pvList);
  let csv = pvList.map(pv => pv.join(','));
  let txt = csv.join('\n');
  fs.writeFileSync(`${dirname}/${filename}.csv`, txt, 'utf8');
  shell.cd(`${dirname}`);
  if (shell.exec(`ssconvert --merge-to=${filename}.xls ${'.'}/*.csv`).code) {
    shell.exec(`ssconvert -T Gnumeric_Excel:xlsx  ${'.'}/*.csv ${filename}.xlsx`)
  }
}
