import {Firebase} from './firebase';

export class News {

  static db() {
    return Firebase.getNewsdb();
  }

  static get(id) {
    return this.db().then(newsdb => {
      const doc = newsdb.doc(id);
      return doc.get().then(doc => {
        if (doc.exists) {
          return this.formatDoc(doc);
        }
      });
    });
  }

  static onChange(cb) {
    this.db().then(newsdb => {
      newsdb.where('publish', '==', true)
        .orderBy('date', 'desc')
        .onSnapshot((snapshot) => {
            snapshot.query.get().then(snapshot => {
              cb(snapshot.docs.map(doc => {
                return this.formatDoc(doc);
              }));
            });
          }
        )
      ;
    });
  }

  private static formatDate(date1: Date) {
    return date1.toDateString();
  }

  private static formatDoc(doc: any) {
    const news = doc.data();
    return {
      ...news,
      _id: doc.id, date: this.formatDate(news.date && news.date.toDate())
    };
  }
}
