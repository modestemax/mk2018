import {UserData} from './user-data';

export class PenaltyData {
  private static data: any;

  static async getData(): Promise<any> {
    await this.load();
    return this.data.etapes;
  }

  private static async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch(`/assets/data/penalty.${UserData.lng}.json`);
      const json = await rsp.json();
      return (this.data = json);
    }
  }
}
