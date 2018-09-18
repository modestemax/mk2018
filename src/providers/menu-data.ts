import {Data} from './data';
import {Text, __} from './i18n';

export class Menu extends Data {
  static async loadTabs(): Promise<any> {
    await Text.load();
    return [
      {label: 'Kamto', 'icon': 'person', tabName: 'tab-who-am-i'},
      {label: __('PROGRAMME'), 'icon': 'folder-open', tabName: 'tab-mon-projet'},
      {label: __('ACTUALITÉS'), 'icon': 'megaphone', tabName: 'page-etoudi'},
      {label: __('07_OCTOBRE'), 'icon': 'football', tabName: 'page-penalty'},
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
