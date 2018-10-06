import {Component, Prop, State} from '@stencil/core';
import {ElectionsData} from '../../../providers/elections-data';
import {__} from '../../../providers/i18n';
import {ConsignesData} from '../../../providers/consignes-data';

@Component({
  tag: 'page-consigne',
  styleUrl: 'page-consigne.scss',
})
export class PageConsigne {

  @Prop() goback = '/';
  private formData: any;
  @State() consignes = [];
  _id = 'consigne';

  async componentWillLoad() {
    this.consignes = await ConsignesData.loadDefaultData();
    this.formData = await ElectionsData.get(this._id) || {};
  }

  componentDidLoad() {
    ConsignesData.onChange(consignes => this.consignes = consignes);
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
              {this.consignes.map(consigne => {
                consigne.details = consigne.details || [];
                return [
                  <ion-label>{consigne.etape}</ion-label>,
                  <ion-item>
                    <ul>
                      {consigne.details.map(detail => (<li>{detail}</li>))}
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

