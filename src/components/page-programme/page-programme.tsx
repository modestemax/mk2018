import { Config } from '@ionic/core';
import { Component, Prop /*Element, Listen, , State */ } from '@stencil/core';
import { __ } from '../../providers/i18n';
import { ChantierData } from '../../providers/chantier-data';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-programme',
  styleUrl: 'page-programme.scss',
})
export class PageProgramme {


  @Prop({ context: 'config' }) config: Config;

  data: any;

  async componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.data = await ChantierData.loadChantiers();
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
          {this.data.chantiers.map(({ numChantier, color, img, label, title, text }) =>
            (<ion-slide>
                <ion-card>
                  <ion-card-header>
                    <ion-thumbnail class="img-wrapper"><img src={`/assets/img/${img}`} class="slide-image"/></ion-thumbnail>
                  </ion-card-header>
                  <hr class="thematique" style={{ height: '15px', backgroundColor: color }}/>
                  <ion-card-content>
                    <ion-label>
                      <p innerHTML={label}/>
                    </ion-label>
                    <ion-label><h2 class="slide-title" innerHTML={title}/></ion-label>
                    <p innerHTML={text}/>
                    <ion-button class="show-detail-button" fill="clear" href={`/programme/chantier/${numChantier}`}>
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
