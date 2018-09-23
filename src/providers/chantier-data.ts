// import { Data } from './data';
//
// export class ChantierData extends Data {
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/chantiers.${lng}.json`;
//   }
//
//   static async getChantier(_id) {
//     const data = await this.load();
//     return data.chantiers.find(c => c.position === _id);
//   }
//
//   static loadChantiers() {
//     return this.load();
//   }
// }


import {Firebase} from './firebase';

export class ChantierData extends Firebase {

  static getCollectionName(lng) {
    return 'chantiers_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc')
  }
}
