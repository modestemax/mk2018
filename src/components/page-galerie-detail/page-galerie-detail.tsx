import {Component, Prop} from '@stencil/core';
import {GaleriesData} from '../../providers/galeries-data';

@Component({
  tag: 'page-galerie-detail',
  styleUrl: 'page-galerie-detail.scss',
})
export class PageGalerieDetail {

  @Prop() goback = '/';
  @Prop() numero: number;
  private data;

  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.data = await GaleriesData.getGalerie(this.numero);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.data.groupTitle}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list class="list">

          <ion-list-header no-padding class="content-header">
            <ion-label class="title">
              {this.data.title}
            </ion-label>
          </ion-list-header>
          <ion-item_group class="resources">
            {this.data.resources.map(({img, video, desc}) => (
              <div no-padding class="resource">
                <img-video img={img} video={video} title={this.data.title}/>
                <ion-label>{desc}</ion-label>
              </div>
            ))}
          </ion-item_group>

        </ion-list>
      </ion-content>
    ];
  }
}
