const fs = require('fs')
// In your index.js

const { serviceAccount_ballots_stat: serviceAccount, databaseURL_ballots_stat: databaseURL ,dir_ballots_stat:dir } = require('../service-account');
// const { serviceAccount_ballots: serviceAccount, databaseURL_ballots: databaseURL ,dir_ballots:dir } = require('../service-account');
// const { serviceAccount_kamto18: serviceAccount, databaseURL_kamto18: databaseURL ,dir_kamto18:dir } = require('../service-account');
// const { serviceAccount_kamto18_dev: serviceAccount, databaseURL_kamto18_dev: databaseURL ,dir_kamto18_dev:dir } = require('../service-account');

// Initiate Firebase App
const firestoreService = require('firestore-export-import');
firestoreService.initializeApp(serviceAccount, databaseURL);

const collection = 'proces-verbaux';
// const collection = 'elections_fr';

// Start exporting your data
firestoreService
// .backup('collection-name', 'sub-collection-optional')
  .backup(collection)
  .then(data => {
    const json = JSON.stringify(data, null, 2);
    console.log(json);
    fs.mkdirSync(dir)
    fs.writeFileSync(`${dir}/${collection}.json`, json, 'utf8')
  });
