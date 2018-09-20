import {Data} from './data';

export class ActualitesData extends Data {
  protected static getUrl() {
    return `/assets/data/actualites.json`;
  }

  static async getRecents(limit) {
    const data = await this.load();
    return data.actualites.slice(0, limit);
  }

  static async getById(actualite_id: any) {
    const data = await this.load();
    return data.actualites.find(actualite => actualite.actualite_id == actualite_id);
  }
}
