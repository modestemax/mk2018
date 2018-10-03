const admin = require('firebase-admin');

const serviceAccount = require('./ballots-237-service-account');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
