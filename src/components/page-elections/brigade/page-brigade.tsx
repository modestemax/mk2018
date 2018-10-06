import {Component, Prop, State} from '@stencil/core';
import {ElectionsData} from '../../../providers/elections-data';
import {BrigadesData} from '../../../providers/brigades-data';
import {__} from '../../../providers/i18n';

@Component({
  tag: 'page-brigade',
  styleUrl: 'page-brigade.scss',
})
export class PageBrigade {

  @Prop() goback = '/';
  private formData: any;
  @State() brigades = [];
  _id = 'brigade';

  async componentWillLoad() {
    this.brigades = await BrigadesData.loadDefaultData();
    this.formData = await ElectionsData.get(this._id) || {};
  }

  componentDidLoad() {
    BrigadesData.onChange(brigades => this.brigades = brigades);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this['goback']}/>
          </ion-buttons>
          <ion-title>
            {__('PRÉSIDENTIELLES_2018')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          <ion-card-header style={{backgroundColor: this.formData.color}}>
            <ion-item>
              <ion-thumbnail class="logo">
                <img-video img={this.formData.img} height="20%"/>
              </ion-thumbnail>
              <ion-text color="light" class="page-title">{this.formData.section}</ion-text>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              {this.brigades.map(brigade => {
                brigade.members = brigade.members || [];
                return [
                  <ion-label>{brigade.zone}</ion-label>,
                  <ion-item>
                    <ul>
                      {brigade.members.map(member => (<li>{member}</li>))}
                    </ul>
                  </ion-item>
                ];
              })}
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>,
    ];
  }


}

