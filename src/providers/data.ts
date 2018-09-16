import {UserData} from './user-data';

export class Data {
  protected static data: any;
  protected static lng;

  protected static async load() {
    await UserData.getLng();
    this.lng = UserData.lng;

    if (this.data) {
      return this.data;
    }
    const rsp = await fetch(this.getUrl(UserData.lng));
    const json = await rsp.json();
    return (this.data = json);
  }

  // @ts-ignore
  protected static getUrl(lng: string): string {

  }
}
