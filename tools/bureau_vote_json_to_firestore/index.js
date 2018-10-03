delete process.env.http_proxy;
delete process.env.https_proxy;

const _ = require('lodash');
const admin = require('firebase-admin');

const pollingStations = require('../csv_bureaux_votes_to_json');
const serviceAccount = require('../ballots-237-service-account');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

// const stations = _.groupBy(pollingStations.map(ps => ({ REGION_DIVISION: `${ps.REGION_NAME} ${ps.DIVISION_NAME}`, ...ps })), 'REGION_DIVISION');
const stations = _.reduce(pollingStations, (stationsGroups, station) => {
  const group = _.last(stationsGroups);
  if (group.length < 500) {
    group.push(station);
  } else {
    stationsGroups.push([station])
  }
  return stationsGroups;
}, [[]]);

saveAll(stations).then(
  () => console.log('Data loading done'),
  err => console.error(err)
);

async function saveAll(stations) {
  return Promise.all(_.map(stations, (pollingStations, index) => {
    console.log('Processing batch' + index);
    const batch = db.batch();
    _.forEach(pollingStations, pollingStation => {
      saveRegion(batch, pollingStation);
      saveDivision(batch, pollingStation);
      saveCouncil(batch, pollingStation);
      savePollingStation(batch, pollingStation);
      // console.log(pollingStation.)
    });
    console.log('Saving batch' + index);
    return batch.commit().then(()=> console.log(`Batch${index} OK`));
  }));
}

function saveRegion(batch, pollingStation) {
  if (pollingStation['REGION_NAME'] && !pollingStation['DIVISION_NAME'] && pollingStation['POLLING_STATIONS_COUNT']) {
    const doc = db.doc(`regions/${_.snakeCase(pollingStation['REGION_NAME']).toLowerCase()}`);
    batch.set(doc, { name: pollingStation['REGION_NAME'], polling_stations_count: pollingStation['POLLING_STATIONS_COUNT'] })
  }
}

function saveDivision(batch, pollingStation) {
  if (pollingStation['REGION_NAME'] && pollingStation['DIVISION_NAME'] && !pollingStation['COUNCIL_NAME'] && pollingStation['POLLING_STATIONS_COUNT']) {
    const doc = db.doc(`regions/${_.snakeCase(pollingStation['REGION_NAME']).toLowerCase()}/divisions/${_.snakeCase(pollingStation['DIVISION_NAME']).toLowerCase()}`);
    batch.set(doc, {
      region: pollingStation['REGION_NAME'],
      name: pollingStation['DIVISION_NAME'],
      polling_stations_count: pollingStation['POLLING_STATIONS_COUNT']
    })
  }
}

function saveCouncil(batch, pollingStation) {
  if (pollingStation['REGION_NAME'] && pollingStation['DIVISION_NAME'] && pollingStation['COUNCIL_NAME'] && !pollingStation['POLLING_STATION'] && pollingStation['POLLING_STATIONS_COUNT']) {
    const doc = db.doc(`regions/${_.snakeCase(pollingStation['REGION_NAME']).toLowerCase()}/divisions/${_.snakeCase(pollingStation['DIVISION_NAME']).toLowerCase()}/councils/${_.snakeCase(pollingStation['COUNCIL_NAME'])}`);
    batch.set(doc, {
      region: pollingStation['REGION_NAME'],
      division: pollingStation['DIVISION_NAME'],
      name: pollingStation['COUNCIL_NAME'],
      polling_stations_count: pollingStation['POLLING_STATIONS_COUNT']
    })
  }
}

function savePollingStation(batch, pollingStation) {
  if (pollingStation['REGION_NAME'] && pollingStation['DIVISION_NAME'] && pollingStation['COUNCIL_NAME'] && pollingStation['POLLING_STATION'] && pollingStation['POLLING_STATIONS_COUNT']) {
    const doc = db.doc(`regions/${_.snakeCase(pollingStation['REGION_NAME']).toLowerCase()}/divisions/${_.snakeCase(pollingStation['DIVISION_NAME']).toLowerCase()}/councils/${_.snakeCase(pollingStation['COUNCIL_NAME'])}/pooling_stations/${_.snakeCase(pollingStation['POLLING_STATION'])}`);
    batch.set(doc, {
      region: pollingStation['REGION_NAME'],
      division: pollingStation['DIVISION_NAME'],
      council_name: pollingStation['COUNCIL_NAME'],
      name: pollingStation['POLLING_STATION'],
    })
  }
}
