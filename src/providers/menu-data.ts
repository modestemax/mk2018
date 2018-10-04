import {/*I18nData,*/ __} from './i18n';
import _ from 'lodash';


import {Firebase} from './firebase';
import {UserData} from './user-data';

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
      {label: 'Kamto', 'icon': 'person', name: 'tab-who-am-i'},
      {label: 'Elections', 'icon': 'flask', name: 'tab-elections', show: false},
      {label: '', 'icon': '', name: 'tab-others', show: false},
      {label: __('CHANTIERS'), 'icon': 'construct', name: 'tab-programme'},
      {label: __('ENGAGEMENTS'), 'icon': 'clipboard', name: 'tab-engagements'},
      {label: __('ACTUALITÉS'), 'icon': 'megaphone', name: 'tab-actualites'}
    ];
  }
}
