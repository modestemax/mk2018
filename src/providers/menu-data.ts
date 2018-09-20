import {Data} from './data';
import {Text, __} from './i18n';

export class Menu extends Data {
  static async loadTabs(): Promise<any> {
    await Text.load();
    return [
      {label: 'Kamto', 'icon': 'person', name: 'tab-who-am-i'},
      {label: __('CHANTIERS'), 'icon': 'construct', name: 'tab-programme'},
      {label: __('ENGAGEMENTS'), 'icon': 'clipboard', name: 'tab-engagements'},
      {label: __('ACTUALITÉS'), 'icon': 'megaphone', name: 'tab-actualites'}
    ];
  }

  static async getMenu(): Promise<any> {
    await this.load();
    return this.data.menu;
  }

  protected static getUrl(lng: string) {
    return `/assets/data/menu.${lng}.json`;
  }
}
