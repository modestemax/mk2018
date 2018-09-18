import {Component, Prop} from '@stencil/core';
import {EngagementsData} from '../../providers/engagements-data';

@Component({
  tag: 'page-engagements-detail',
  styleUrl: 'page-engagements-detail.scss',
})
export class PageEngagementsDetail {

  @Prop() goback = '/';
  @Prop() numero: number;
  private data;


  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.data = await EngagementsData.getEngagement(this.numero);
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

        <ion-list class="group-all">
          <ion-item-group class="group-text">

            <ion-item-divider class="content-header">
              <ion-label class="title">
                {this.data.title}
              </ion-label>
            </ion-item-divider>
            <ion-item>
              <div class="text" innerHTML={this.data.text}/>
              <br/>
            </ion-item>

          </ion-item-group>

          <ion-item-group class="resources">
            {this.data.resources.map(({img, video}) => (
              <div no-padding class="resource">
                <img-video img={img} video={video} vtitle={this.data.title}/>
                <br/>
              </div>
            ))}
          </ion-item-group>
        </ion-list>


      </ion-content>
    ];
  }

}
