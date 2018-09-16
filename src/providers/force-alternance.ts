import {UserData} from './user-data';

export class ForceAlternanceData {
  private static data: any;

  static async getData(key: string = null): Promise<any> {
    await this.load();
    return key
      ? this.data.forces.find(c => c.key === key)
      : this.data.forces;
  }

  private static async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch(`/assets/data/force-alternance.${UserData.lng}.json`);
      const json = await rsp.json();
      return (this.data = json);
    }
  }
}
