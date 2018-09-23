import { Component, Prop } from '@stencil/core';
import { CVData } from '../../../providers/cv-data';

@Component({
  tag: 'page-mon-cv',
  styleUrl: 'page-mon-cv.scss',
})
export class PageMonCv {

  // private session: any;
  @Prop() _id: string;
  @Prop() goback = '/';
  private data;


  async componentWillLoad() {
    this.data = await CVData.get(this._id);
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.data.section}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          <ion-card-header class={`header ${this._id} `} style={{ backgroundColor: this.data.color }}>
            <div class="logo"><img src={`/assets/img/${this.data.img}`} alt="logo"/></div>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              {this.data.content.map(item => (
                <ion-item-group>
                  <ion-item-divider>
                    <ion-text class="content-header">
                      {item.title}
                    </ion-text>
                  </ion-item-divider>
                  <ul>
                    {item.items.map(text => (
                      <li>
                        <ion-text class="content-text">  {text}</ion-text>
                      </li>
                    ))}
                    <br/>
                  </ul>
                </ion-item-group>
              ))}
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }


}

