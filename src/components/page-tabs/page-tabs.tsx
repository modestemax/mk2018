import {Component} from '@stencil/core';
import {Menu} from '../../providers/menu-data';


@Component({
  tag: 'page-tabs',
  styleUrl: 'page-tabs.css',
})
export class PageTabs {
  tabs: any = [];

  async componentWillLoad() {
    return this.tabs = await Menu.loadTabs();
  }

  render() {
    return [
      <ion-tabs>
        {this.tabs.map(tab => {
          if ('component' in tab) {
            return (
              <ion-tab  {...tab}/>
            );
          } else {
            return (
              <ion-tab  {...tab}>
                <ion-nav/>
              </ion-tab>
            );
          }
        })}

        <ion-tab label="" icon="map" name="tab-hidden" show={false}>
          <ion-nav/>
        </ion-tab>

      </ion-tabs>
    ];
  }
}
