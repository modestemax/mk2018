// import {Data} from "./data";
//
// export class ContactsData extends Data {
//
//   static async getContacts() {
//     let data = await this.load();
//     return data.contacts;
//   }
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/contacts.${lng}.json`;
//   }
// }


import { Firebase } from './firebase';

export class ContactsData extends Firebase {

  static getCollectionName(lng) {
    return 'contacts_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc')
      .limit(1);
  }

  static sendMail(mail: { name: string; phone: string; email: string; city: string; message: string; subject: string, language: string }) {
    const batch = this.firestore.batch();
    const doc = this.firestore.collection('contact-us-messages').doc();
    batch.set(doc, mail);
    return batch.commit();
  }
}
