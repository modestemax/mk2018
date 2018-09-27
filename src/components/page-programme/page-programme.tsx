import {Config} from '@ionic/core';
import {Component, Prop, State /*Element, Listen, , State */} from '@stencil/core';
import {__} from '../../providers/i18n';
import {ChantierData} from '../../providers/chantier-data';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-programme',
  styleUrl: 'page-programme.scss',
})
export class PageProgramme {


  @Prop({context: 'config'}) config: Config;

  @State() data: any = [];

  async componentWillLoad() {
    this.data = await ChantierData.loadDefaultData();
  }

  componentDidLoad() {
    ChantierData.onChange(data => this.data = data);

  }

  render() {

    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {__('PROGRAMME_DE_GOUVERNANCE')}
          </ion-title>
          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false}>
        <ion-slides pager={true}>
          {this.data.map(({_id, color, img, label, title, text, details}) =>
            (<ion-slide>
                <ion-card>
                  <ion-card-header>
                    <ion-thumbnail class="img-wrapper">
                      <img-video img={img} class="slide-image"/>
                    </ion-thumbnail>
                  </ion-card-header>
                  <hr class="thematique" style={{height: '15px', backgroundColor: color}}/>
                  <ion-card-content>
                    <ion-label>
                      <p innerHTML={label}/>
                    </ion-label>
                    <ion-label><h2 class="slide-title" innerHTML={title}/></ion-label>
                    <p innerHTML={text}/>

                    {details && details.length ?
                      <ion-button class="show-detail-button" fill="clear" href={`/programme/chantier/${_id}`}>
                        {__('EXPLORER')}
                      </ion-button>
                      : ''}
                    {/*<ion-icon slot="end" name="arrow-forward"/>*/}

                  </ion-card-content>

                </ion-card>
              </ion-slide>
            ))}
        </ion-slides>
      </ion-content>
    ];
  }
}
