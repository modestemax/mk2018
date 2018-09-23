// import { Data } from './data';
//
// export class CVData extends Data {
//   static async getDoc(docName: string = null): Promise<any> {
//     await this.load();
//     return docName
//       ? this.data.sections.find(c => c.key === docName)
//       : this.data.sections;
//
//   }
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/cv.${lng}.json`;
//   }
//
// }

  import {Firebase} from './firebase';

  export class CVData extends Firebase {

    static getCollectionName(lng) {
      return 'cv_' + lng;
    }

    static filter(collection) {
      return collection.where('publish', '==', true)
        .orderBy('position', 'asc')
    }
  }
