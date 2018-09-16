import { Data } from './data';
import { Text, __ } from './i18n';

export class Menu extends Data {
  static async loadTabs(): Promise<any> {
    await Text.load();
    return [
      { label: __('QUI_SUIS_JE'), 'icon': 'person', tabName: 'tab-who-am-i' },
      { label: __('MON_PROJET'), 'icon': 'folder-open', tabName: 'tab-mon-projet' },
      { label: __('VERS_ETOUDI'), 'icon': 'walk', tabName: 'page-etoudi' },
      { label: __('LE_PENALTY'), 'icon': 'football', tabName: 'page-penalty' },
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
