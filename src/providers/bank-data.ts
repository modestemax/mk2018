import {Data} from './data';

export class BankData extends Data {


  static async getBanks(): Promise<any> {
    await this.load();
    return this.data.banks
  }


  protected static getUrl(lng: string) {
    return `/assets/data/banks.${lng}.json`;
  }
}
