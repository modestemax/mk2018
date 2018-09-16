import { Component } from '@stencil/core';
import { Menu } from '../../providers/menu-data';



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
        <ion-tab label={this.tabs[0].label} icon={this.tabs[0].icon} name={this.tabs[0].tabName}>
          <ion-nav/>
        </ion-tab>
        <ion-tab label={this.tabs[1].label} icon={this.tabs[1].icon} name={this.tabs[1].tabName}>
          <ion-nav/>
        </ion-tab>
        <ion-tab label={this.tabs[2].label} icon={this.tabs[2].icon} component={this.tabs[2].tabName}/>
        <ion-tab label={this.tabs[3].label} icon={this.tabs[3].icon} component={this.tabs[3].tabName}/>
        <ion-tab label="" icon="map" name="tab-hidden" show={false}>
          <ion-nav/>
        </ion-tab>

        -------------------------------------------------
        {/* <ion-tab label="Schedule" icon="calendar" name="tab-schedule">
          <ion-nav/>
        </ion-tab>
        <ion-tab label="Speakers" icon="contacts" name="tab-speaker">
          <ion-nav/>
        </ion-tab>

        <ion-tab label="Map" icon="map" component="page-map"/>
        <ion-tab label="About" icon="information-circle" component="page-about"/>*/}
      </ion-tabs>
    ];
  }
}
