import { Data } from './data';

export class ChantierData extends Data {

  protected static getUrl(lng: string) {
    return `/assets/data/chantiers.${lng}.json`;
  }

  static async getChantier(num) {
    const data = await this.load();
    return data.chantiers.find(c => c.numChantier === num);
  }

  static loadChantiers() {
    return this.load();
  }
}
