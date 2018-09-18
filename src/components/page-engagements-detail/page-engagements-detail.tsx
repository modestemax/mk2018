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
        <ion-list class="list">

          <ion-list-header class="content-header">
            <ion-label class="title">
              {this.data.title}
            </ion-label>
          </ion-list-header>
          <ion-item>
            <div class="text" innerHTML={this.data.text}/>
            <br/>
          </ion-item>

        </ion-list>

        <ion-list>
          {this.data.resources.map(({img, video}) => (
            <div no-padding class="resource">
              {this.getResourceContent({img, video})}
              <br/>
            </div>
          ))}
        </ion-list>

      </ion-content>
    ];
  }


  private getResourceContent({img, video}) {
    if (img) {
      return (<img class="res-image" src={`/assets/img/${img}`} alt=""/>);
    }
    if (video) {
      return (<lazy-iframe src={video} width="100%" height="auto" title={this.data.title}/>);
    }
  }
}
