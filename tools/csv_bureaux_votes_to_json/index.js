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
rows = rows.reduce((fullRows, row, index, rows) => {
  console.log(`preparing [${index}] ${row.POLLING_STATION}`)
  let prevRow = fullRows[+index - 1];
  if (prevRow && !row['REGION_NAME']) {
    return [...fullRows, _.mapValues(row, (val, prop) => val || prevRow[prop])];
  }
  return [...fullRows, row];
}, []);


module.exports = rows;

function getCSV() {
  return fs.readFileSync(__dirname + '/data.csv', 'utf-8')
}
