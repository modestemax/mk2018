import { Data } from './data';

export class BankData extends Data {


  static async getBanks(): Promise<any> {
    return this.load();
  }


  protected static getUrl(lng: string) {
   return `/assets/data/banks.${lng}.json`;
  }
}
