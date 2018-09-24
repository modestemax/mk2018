// import {Data} from './data';
import { /*I18nData,*/ __ } from './i18n';
import _ from 'lodash';
//
// export class Menu extends Data {
//   static async loadTabs(): Promise<any> {
//     await Text.load();
//     return [
//       {label: 'Kamto', 'icon': 'person', name: 'tab-who-am-i'},
//       {label: __('CHANTIERS'), 'icon': 'construct', name: 'tab-programme'},
//       {label: __('ENGAGEMENTS'), 'icon': 'clipboard', name: 'tab-engagements'},
//       {label: __('ACTUALITÉS'), 'icon': 'megaphone', name: 'tab-actualites'}
//     ];
//   }
//
//   static async getMenu(): Promise<any> {
//     await this.load();
//     return this.data.menu;
//   }
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/menu.${lng}.json`;
//   }
// }


import { Firebase } from './firebase';
import { UserData } from './user-data';

export class Menu extends Firebase {

  static getCollectionName() {
    return 'menu';
  }

  static async getMenu() {
    const lng = await UserData.getLng();
    return this.get(lng);
  }

  static async getDefaultMenu() {
    const menus = await this.loadDefaultData();
    return _.values(_.groupBy(menus[0].items, 'group'));
  }

  static formatDoc(doc: any) {
    const menu: any = super.formatDoc(doc);
    return _.values(_.groupBy(menu.items, 'group'));
  }

  static async loadTabs(): Promise<any> {
    // await I18nData.loadStrings();
    return [
      { label: 'Kamto', 'icon': 'person', name: 'tab-who-am-i' },
      { label: __('CHANTIERS'), 'icon': 'construct', name: 'tab-programme' },
      { label: __('ENGAGEMENTS'), 'icon': 'clipboard', name: 'tab-engagements' },
      { label: __('ACTUALITÉS'), 'icon': 'megaphone', name: 'tab-actualites' }
    ];
  }
}
