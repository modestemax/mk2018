// import { Data } from './data';
//
// export class ForceAlternanceData extends Data {
//
//   static async getData(key: string = null): Promise<any> {
//     await this.load();
//     return key
//       ? this.data.forces.find(c => c.key === key)
//       : this.data.forces;
//   }
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/force-alternance.${lng}.json`;
//   }
// }


import { Firebase } from './firebase';

export class ForceAlternanceData extends Firebase {

  static getCollectionName(lng) {
    return 'force-alternance_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc');
  }
}
