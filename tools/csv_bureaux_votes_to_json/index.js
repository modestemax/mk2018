const fs = require('fs');
const _ = require('lodash');
let csv = getCSV();

//--build rows
let rows = csv.split('\n');
rows = rows.map(r => r.split(','));

//---remove header
let header = rows.shift().map(h => _.trim(h));

//---remove last line
rows.pop();
rows.pop();

//--map rows to object
rows = rows.map(row => _.zipObject(header, _.map(row, v => _.trim(v))))

//--fill empty column
module.exports = rows.reduce((fullRows, row, index, rows) => {
  console.log(`preparing [${index}] ${row.POLLING_STATION}`)
  let prevRow = fullRows[+index - 1];
  let curRow = { ...row };
  if (prevRow) {
    if (!row['REGION_NAME']) {
      curRow['REGION_NAME'] = prevRow['REGION_NAME'];
      if (!row['DIVISION_NAME']) {
        curRow['DIVISION_NAME'] = prevRow['DIVISION_NAME'];
        if (!row['COUNCIL_NAME']) {
          curRow['COUNCIL_NAME'] = prevRow['COUNCIL_NAME']
        }
      }
    }
  }
  return [...fullRows, curRow];

}, []);


// const oldRows = require('./data');

// const newRows = rows.reduce((newRows, row, index) => {
//   let oldRow = oldRows[index];
//   if (oldRow) {
//     return [...newRows, row]
//   }
//   return newRows;
// }, []);
//
// const delRows = rows.reduce((delRows, row, index) => {
//   let oldRow = oldRows[index];
//   if (oldRow['DIVISION_NAME'] !== row['DIVISION_NAME']||oldRow['COUNCIL_NAME'] !== row['COUNCIL_NAME']||oldRow['POLLING_STATION'] !== row['POLLING_STATION']) {
//     return [...delRows, oldRow]
//   }
//   return delRows;
// }, []);
//
//
// module.exports = {
//   rows, oldRows, delRows
// }

function getCSV() {
  return fs.readFileSync(__dirname + '/data.csv', 'utf-8')
}
