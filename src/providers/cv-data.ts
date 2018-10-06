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
