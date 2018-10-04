import {Firebase} from './firebase';
import _ from 'lodash';
import {UserData} from "./user-data";

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
    return (this.strings[this.lng] && this.strings[this.lng][key]) || this.strings[DEFAULT_LNG][key] || `--${key}--`;
  }


}

UserData.onLangChanged(async (lng) => {
  I18nData.lng = lng;
});

export const __ = I18nData.getText.bind(I18nData);
