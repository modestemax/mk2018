import { Data } from './data';

export class PenaltyData extends Data {


  static async getData(): Promise<any> {
    await this.load();
    return this.data.etapes;
  }

  protected static getUrl(lng: string) {
    return `/assets/data/penalty.${lng}.json`;
  }
}
