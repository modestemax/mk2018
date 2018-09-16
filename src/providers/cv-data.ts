import {UserData} from './user-data';

export class CVData {
  private static data: any;

  static async getDoc(docName: string = null): Promise<any> {
    await this.load();
    return docName
      ? this.data.sections.find(c => c.key === docName)
      : this.data.sections;

  }

  private static async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch(`/assets/data/cv.${UserData.lng}.json`);
      const json = await rsp.json();
      return (this.data = json);
    }
  }
}
