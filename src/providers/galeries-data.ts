import {Data} from './data';

export class GaleriesData extends Data {

  static async getData(key: string = null): Promise<any> {
    await this.load();
    return key
      ? this.data.galeries.find(c => c.key === key)
      : this.data;
  }

  protected static getUrl(lng: string) {
    return `/assets/data/galeries.${lng}.json`;
  }
}
