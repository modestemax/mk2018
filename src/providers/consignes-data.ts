import {Firebase} from './firebase';

export class ConsignesData extends Firebase {

  static getCollectionName(lng) {
    return 'consignes_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc');
  }
}
