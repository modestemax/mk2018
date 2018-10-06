import { Firebase } from './firebase';

export class BrigadesData extends Firebase {

  static getCollectionName(lng) {
    return 'brigades_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc');
  }
}
