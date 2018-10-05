import {Firebase} from './firebase';

export class ElectionsData extends Firebase {

  static getCollectionName(lng) {
    return 'elections_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc')
  }

  static getScrutineerFormData() {
    return this.get('scrutateur')
  }

  static getProcesVerbalFormData() {
    return this.get('proces-verbal')
  }
}
