import {Data} from './data';
import {Text, __} from './i18n';

export class Menu extends Data {
  static async loadTabs(): Promise<any> {
    await Text.load();
    return [
      {label: 'Kamto', 'icon': 'person', name: 'tab-who-am-i'},
      {label: __('PROGRAMME'), 'icon': 'folder-open', name: 'tab-mon-projet'},
      {label: __('ACTUALITÉS'), 'icon': 'megaphone', name: 'tab-actualites'},
      {label: __('07_OCTOBRE'), 'icon': 'football', component: 'page-penalty'},
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
