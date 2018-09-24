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


import {Firebase} from './firebase';

export class ContactsData extends Firebase {

  static getCollectionName(lng) {
    return 'contacts_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc')
      .limit(1)
  }
}
