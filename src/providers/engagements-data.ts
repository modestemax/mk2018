// import {map, snakeCase} from 'lodash';
import { Data } from './data';

export class EngagementsData extends Data {

  private static engagements = [];

  protected static getUrl(lng: string) {
    return `/assets/data/engagements.${lng}.json`;
  }

  static async load() {
    const data = await super.load();
    let numero = 1;
    data.engagements = data.engagements.map(({ sousEngagements, ...args }) => {
      return {
        ...args,
        sousEngagements: sousEngagements.map(({ details, title: groupTitle, ...args }) => {
          return {
            ...args, title: groupTitle,
            details: details.map(({ title, ...args }) => {
              const engagement = {
                ...args, title,
                numero: numero++,
                groupTitle,
                titleKey: encodeURIComponent(title)
              };
              this.engagements[engagement.numero] = engagement;
              return engagement;
            })
          };
        })
      };
    });
    return data;
  }

  static async getData() {
    return this.load();
  }

  static async getEngagement(numero: number) {
    await this.load();
    return this.engagements[numero] || {};
  }
}
