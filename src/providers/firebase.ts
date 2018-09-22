import firebase from 'firebase/app';
import 'firebase/firestore';
import {config} from '../app-settings/firebase';


export class Firebase {
  static firestore: any;


  static async initialize() {

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      this.firestore = firebase.firestore();
      this.firestore.settings({
        timestampsInSnapshots: true
      });
      firebase.firestore().enablePersistence()
        .catch(err => {
          if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
          } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
          }
          // throw err;
        });

    } else {
      this.firestore = firebase.firestore();
    }
  }


  static async getNewsdb() {
    await this.initialize();
    return this.firestore.collection('news');
  }
}
