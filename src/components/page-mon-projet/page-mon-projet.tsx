import {Config} from '@ionic/core';
import {Component, Prop /*Element, Listen, , State */} from '@stencil/core';
import {chantierData} from '../../providers/chantier-data';
import {__} from '../../providers/i18n';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-mon-projet',
  styleUrl: 'page-mon-projet.scss',
})
export class PageMonProjet {


  @Prop({context: 'config'}) config: Config;

  data: any;
  EXPLORER: any;
  PAGE_TITLE: any;


  async componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.data = await chantierData.load();
  }

  componentDidLoad() {

  }

  render() {

    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {__('MON_PROJET_POUR_LE_CAMEROUN')}
          </ion-title>
          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false}>
        <ion-slides pager={true}>
          {this.data.chantiers.map(({numChantier, logo, label, title, text}) =>
            (<ion-slide>
                <ion-card>
                  <ion-card-header>
                    <ion-thumbnail class="img-wrapper"><img src={`/assets/img/${logo}`} class="slide-image"/></ion-thumbnail>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-label>
                      <p innerHTML={label}/>
                    </ion-label>
                    <ion-label><h2 class="slide-title" innerHTML={title}/></ion-label>
                    <p innerHTML={text}/>
                    <ion-button class="show-detail-button" fill="clear" href={`/mon-projet/chantier/${numChantier}`}>
                      {__('EXPLORER')}
                      {/*<ion-icon slot="end" name="arrow-forward"/>*/}
                    </ion-button>

                  </ion-card-content>

                </ion-card>
              </ion-slide>
            ))}
        </ion-slides>
      </ion-content>
    ];
  }
}
