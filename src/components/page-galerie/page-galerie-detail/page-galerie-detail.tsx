import {Component, Prop} from '@stencil/core';
import {GaleriesData} from '../../../providers/galeries-data';

@Component({
  tag: 'page-galerie-detail',
  styleUrl: 'page-galerie-detail.scss',
})
export class PageGalerieDetail {

  @Prop() goback = '/';
  @Prop() _id: any;
  @Prop() _title: any;
  private galeries;
  private galerie;

  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    const galeries = await GaleriesData.get(this._id);
    const galerie = galeries && galeries.details.find(d => d.title === decodeURIComponent(this._title));
    this.galeries = galeries || {};
    this.galerie = galerie || {};
    this.galerie.resources = this.galerie.resources || [];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.galeries.title}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list class="group-list">

          <ion-list-header no-padding class="content-header">
            <ion-label class="title">
              {this.galerie.title}
            </ion-label>
          </ion-list-header>
          <ion-item-group class="resources">
            {this.galerie.resources.map(({img, video, desc}) => (
              <ion-item no-padding class="resource">
                <ion-label>
                  <img-video img={img} video={video} vtitle={this.galerie.title}/>
                  <ion-label>{desc}</ion-label>
                </ion-label>
              </ion-item>
            ))}
          </ion-item-group>

        </ion-list>
      </ion-content>
    ];
  }
}
