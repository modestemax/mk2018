// import {Data} from './data';
//
// export class TutorialData extends Data {
//
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/tutorial.${lng}.json`;
//   }
//
//   static async loadSlides() {
//     await this.load();
//     return this.data.slides
//   }
// }

import {Firebase} from './firebase';

export class TutorialData extends Firebase {

  static getCollectionName(lng) {debugger
    return 'tutorial_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc')
  }
}
