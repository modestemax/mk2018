import { Data } from './data';

const DEFAULT_LNG = 'fr';

export class Text extends Data {
  static onLngChanged: any = [];

  static text: any;
  static lng = DEFAULT_LNG;

  static async load() {
    if (this.text) {
      return this.text;
    } else {
      const rsp = await fetch('/assets/data/i18n.json');
      const json = await rsp.json();
      return (this.text = json);
    }
  }

  static async setLng(lng) {
    this.lng = lng || this.lng;
  }

  static getText(key) {
    return (this.text[this.lng] && this.text[this.lng][key]) || this.text[DEFAULT_LNG][key];
  }
}

export const __ = Text.getText.bind(Text);
