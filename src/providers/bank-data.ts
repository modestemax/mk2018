import {UserData} from './user-data';

export class BankData {
  private static data: any;

  static async getBanks(): Promise<any> {
    return this.load();
  }

  private static async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch(`/assets/data/banks.${UserData.lng}.json`);
      const json = await rsp.json();
      return (this.data = json);
    }
  }
}
