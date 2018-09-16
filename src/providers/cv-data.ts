import { Data } from './data';

export class CVData extends Data {
  static async getDoc(docName: string = null): Promise<any> {
    await this.load();
    return docName
      ? this.data.sections.find(c => c.key === docName)
      : this.data.sections;

  }

  protected static getUrl(lng: string) {
    return `/assets/data/cv.${lng}.json`;
  }

}
