// In your index.js

const { serviceAccount_kamto18: serviceAccount, databaseURL_kamto18: databaseURL, dir_kamto18: dir } = require('../service-account');
// const { serviceAccount_kamto18_dev: serviceAccount, databaseURL_kamto18_dev: databaseURL ,dir_kamto18_dev:dir } = require('../service-account');


// Initiate Firebase App
const firestoreService = require('firestore-export-import');
firestoreService.initializeApp(serviceAccount, databaseURL);

const collection = 'i18n';
// const collection = 'elections_fr';

// Start importing your data
// The array of date fields is optional
// firestoreService.restore(collection+'.json', ['date1-field', 'date2-field']);
firestoreService.restore(`${dir}/${collection}.json`);
