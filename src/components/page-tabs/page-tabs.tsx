import {Component} from '@stencil/core';


@Component({
  tag: 'page-tabs',
  styleUrl: 'page-tabs.css',
})
export class PageTabs {

  render() {
    return [
      <ion-tabs>
        <ion-tab label="" icon="calendar" name="tab-who-am-i">
          <ion-nav/>
        </ion-tab>
        <ion-tab label="" icon="calendar" name="tab-mon-projet">
          <ion-nav/>
        </ion-tab>
        <ion-tab label="" icon="map" component="page-penalty"/>

        {/*-------------------------------------------------*/}
        <ion-tab label="Schedule" icon="calendar" name="tab-schedule">
        <ion-nav/>
        </ion-tab>
        <ion-tab label="Speakers" icon="contacts" name="tab-speaker">
          <ion-nav/>
        </ion-tab>

        <ion-tab label="Map" icon="map" component="page-map"/>
        <ion-tab label="About" icon="information-circle" component="page-about"/>
      </ion-tabs>
    ];
  }
}
