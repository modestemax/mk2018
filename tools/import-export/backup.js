const fs = require('fs')
// In your index.js

const { serviceAccount_kamto18: serviceAccount, databaseURL_kamto18: databaseURL ,dir_kamto18:dir } = require('../service-account');
// const { serviceAccount_kamto18_dev: serviceAccount, databaseURL_kamto18_dev: databaseURL ,dir_kamto18_dev:dir } = require('../service-account');

// Initiate Firebase App
const firestoreService = require('firestore-export-import');
firestoreService.initializeApp(serviceAccount, databaseURL);

const collection = 'i18n';
// const collection = 'elections_fr';

// Start exporting your data
firestoreService
// .backup('collection-name', 'sub-collection-optional')
  .backup(collection)
  .then(data => {
    const json = JSON.stringify(data, null, 2);
    console.log(json);
    fs.mkdir(dir)
    fs.writeFileSync(`${dir}/${collection}.json`, json, 'utf8')
  });
