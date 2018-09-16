import {Component, Prop} from '@stencil/core';
import {ForceAlternanceData} from '../../providers/force-alternance';
import {__} from '../../providers/i18n';

@Component({
  tag: 'page-forces-detail',
  styleUrl: 'page-forces-detail.scss',
})
export class PageForcesDetail {

  @Prop() goback = '/';
  @Prop() forceId = '';
  private content;


  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.content = await ForceAlternanceData.getData(this.forceId);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {__('LES_FORCES_POUR_L_ALTERNANCE_URNES_PAIX')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list class="list">

          <ion-list-header class="header">
            <ion-label class="title">
              {this.content.title}
            </ion-label>
          </ion-list-header>
          <ion-item>
            <ion-thumbnail>
              <img src={`/assets/img/${this.content.img}`}/>
            </ion-thumbnail>
          </ion-item>
          <ion-item>
            <p class="text" innerHTML={this.content.desc}/>
          </ion-item>

        </ion-list>

        {this.content.resources.map(r => (
          r.type === 'img'
            ? <img src={r.src_internet ? r.src : `/assets/img/${r.src}`} alt=""/>
            : <lazy-iframe src={r.src} width="100%" height="auto" title={r.title}/>
        ))}


      </ion-content>
    ];
  }


}
