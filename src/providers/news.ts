import {Firebase} from './firebase';

export class News extends Firebase {

  static getCollectionName(/*lng*/) {
    return 'news';
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('date', 'desc')
  }
}
