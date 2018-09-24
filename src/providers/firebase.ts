import firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from '../app-settings/firebase';
// import {loadDefaultData, initialData} from './firebase-init';
import { loadDefaultDataByCollection, pushDefaultData } from './firebase-init';
import { UserData } from './user-data';


export abstract class Firebase {
  static firestore: any;
  static data;

  static async initialize() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      this.firestore = firebase.firestore();
      this.firestore.settings({
        timestampsInSnapshots: true
      });
      await firebase.firestore().enablePersistence()
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
      // return  loadDefaultData;
      // await loadDefaultData(this.firestore);
    } else {
      this.firestore = firebase.firestore();
    }
  }

  static async pushDefaultData() {
    // return initialData[this.getCollectionName('fr')]
    pushDefaultData(this.firestore);
    // const lng = await UserData.getLng();
    // return loadDefaultDataByCollection(this.firestore, this.getCollectionName(lng));
  }

  static async loadDefaultData() {
    // return initialData[this.getCollectionName('fr')]
    const lng = await UserData.getLng();
    this.data = await loadDefaultDataByCollection(this.getCollectionName(lng));
    return [...this.data];
    // return loadDefaultDataByCollection(this.firestore, this.getCollectionName(lng));
  }

  static get(id) {
    id = decodeURIComponent(id);
    if (this.data && this.data.find) {
      return this.formatDoc({ ...this.data.find(item => item._id == id) });
    }
    return this.getCollection().then(collection => {
      const doc = collection.doc(id);
      return doc.get().then(doc => {
        if (doc.size || doc.exists) {
          return this.formatDoc(doc);
        }
      });
    });
  }

  static getAll() {
    return this.getCollection().then(collection => {
      return this.filter(collection).get().then(doc => {
        if (doc.size || doc.exists) {
          return this.formatDocs(doc.docs);
        }
      });
    });
  }

  static async getCollection() {
    const lng = await UserData.getLng();
    return this.firestore.collection(this.getCollectionName(lng));
  }

  static getCollectionName(lng): string {
    throw new Error('Not Implemented ' + lng);
  }

  static filter(collection) {
    return collection;
  }

  static onChange(callback) {
    this.getCollection().then(collection => {
      this.filter(collection)
        .onSnapshot((snapshot) => {
          snapshot.query.get().then(snapshot => {
            this.data = snapshot.docs.map(d => d.data());
            callback(this.formatDocs(snapshot.docs));
          });
        });
    });
  }

  static formatDocs(docs: any) {
    return docs.map(this.formatDoc.bind(this));
  }

  static formatDoc(doc: any) {
    const data = typeof doc.data === 'function' ? doc.data() : doc;
    return {
      ...data,
      _id: doc.id, ...this.formatDates(data)
    };
  }

  static formatDates(data) {
    const dates = {};
    for (const [prop, value] of Object.entries(data)) {
      if (typeof (value as any).toDate === 'function') {
        dates[prop] = (value as any).toDate().toDateString();
      }
    }
    return dates;
  }
}
