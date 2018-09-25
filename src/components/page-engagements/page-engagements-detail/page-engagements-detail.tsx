import {Component, Prop, State} from '@stencil/core';
import {EngagementsData} from '../../../providers/engagements-data';

@Component({
  tag: 'page-engagements-detail',
  styleUrl: 'page-engagements-detail.scss',
})
export class PageEngagementsDetail {

  @Prop() goback = '/';
  @Prop() _id: any;
  @Prop() _title: any;
  @Prop() type_title: any;
  @State() engagement;
  @State() type_engagement;


  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    const data = await EngagementsData.get(this._id);
    const type_engagement: any = data && data.types.find(type => type.title === decodeURIComponent(this.type_title));
    const engagement = type_engagement && type_engagement.engagements.find(e => e.title === decodeURIComponent(this._title));
    this.type_engagement = type_engagement || {};
    this.engagement = engagement || {};
    this.engagement.items = this.engagement.items || [];
    this.engagement.resources = this.engagement.resources || [];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.type_engagement.title}
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
                {this.engagement.title}
              </ion-label>
            </ion-item-divider>
            <ion-item>
              <div class="text" innerHTML={this.engagement.text}/>
              <br/>
            </ion-item>
            <ion-item>
              <ul>
                {this.engagement.items.map(text => (
                  <li class="engagement-item">
                    {text}
                  </li>
                ))}
              </ul>
            </ion-item>
          </ion-item-group>

          <ion-item-group class="resources">
            {this.engagement.resources.map(({img, video}) => (
              <div no-padding class="resource">
                <img-video img={img} video={video} vtitle={this.engagement.title}/>
                <br/>
              </div>
            ))}
          </ion-item-group>
        </ion-list>


      </ion-content>
    ];
  }

}
