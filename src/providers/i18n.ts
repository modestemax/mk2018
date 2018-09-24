// import { Data } from './data';
//

//
// export class Text extends Data {
//   static onLngChanged: any = [];
//
//   static text: any;
//   static lng = DEFAULT_LNG;
//
//   static async load() {
//     if (this.text) {
//       return this.text;
//     } else {
//       const rsp = await fetch('/assets/data/i18n.json');
//       const json = await rsp.json();
//       return (this.text = json);
//     }
//   }
//
//   static async setLng(lng) {
//     this.lng = lng || this.lng;
//   }
//
//   static getText(key) {
//     return (this.text[this.lng] && this.text[this.lng][key]) || this.text[DEFAULT_LNG][key];
//   }
// }
//

import {Firebase} from './firebase';
import _ from 'lodash';

const DEFAULT_LNG = 'fr';

export class I18nData extends Firebase {
  static strings: any;
  static lng = DEFAULT_LNG
  // static onLngChanged: any = [];

  static getCollectionName() {
    return 'i18n';
  }

  // static async loadStrings() {
  //   this.strings = this.strings || await this.getAll();
  // }

  static async loadDefaultStrings() {
    const strings = await this.loadDefaultData();
    this.strings = _.mapValues(_.groupBy(strings, '_id'), list => list[0]);
  }

  static formatDocs(docs: any) {
    const strings = super.formatDocs(docs);
    return _.mapValues(_.groupBy(strings, '_id'), list => list[0]);
  }

  static getText(key) {
    return (this.strings[this.lng] && this.strings[this.lng][key]) || this.strings[DEFAULT_LNG][key];
  }


}

export const __ = I18nData.getText.bind(I18nData);
