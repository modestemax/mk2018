import {Config} from '@ionic/core';
import {Component, Prop /*Element, Listen, , State */} from '@stencil/core';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-who-am-i',
  styleUrl: 'page-who-am-i.css',
})
export class PageMyProject {


  @Prop({context: 'config'}) config: Config;

  chantiers = [
    {
      numChantier: null,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Notre Idéologie',
      title: 'LE SOCIAL LIBERALISME',
      text: `Afin de mettre chaque Camerounais au cœur de l'action politique pour la modernisation de notre pays`
    }
    , {
      numChantier: 1,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Chantier No 1',
      title: `MODERNISATION POLITIQUE ET INSTITUTIONNELLE`,
      text: `Organiser le vivre ensemble et moderniser les Institutions de la République.`
    }
    , {
      numChantier: 2,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Chantier No 2',
      title: `MODERNISATION DE L'ECONOMIE, L'AMENAGEMENT DU TERRITOIRE ET LE DEVELOPPEMENT DURABLE`,
      text: `Le Cameroun un havre de paix et de prospérité.`
    }
    , {
      numChantier: 3,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Chantier No 3',
      title: `MODERNISATION DE L'EDUCATION ET DU SYSTEME SOCIAL, LE STATUT DE LA FEMME`,
      text: `Des Camerounais bien formés, solidaires et en bonne santé`
    }
    , {
      numChantier: 4,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Chantier No 4',
      title: `MODERNISATION DE LA CULTURE, LE TOURISME ET LE DEVELOPPEMENT SPORTIF`,
      text: `Mieux faire connaitre le Cameroun, Afrique en miniature.`
    }
    , {
      numChantier: 5,
      logo: '/assets/img/ica-slidebox-img-2.png',
      label: 'Chantier No 5',
      title: `LA MODERNISATION DE LA POLITIQUE ETRANGERE ET DE LA DIPLOMATIE, PLACE DE LA DIASPORA`,
      text: `Une diplomatie de présence avec forte implication de la diaspora.`
    }
  ];

  componentWillLoad() {
    // this.updateSchedule();
  }

  componentDidLoad() {
    // this.scheduleList = this.el.querySelector('#scheduleList');
    // this.fab = this.el.querySelector('#socialFab');
  }


  render() {
    // const mode = this.config.get('mode');

    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            Qui suis-je
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-item>
            <img src="assets/img/ionic-logo-white.svg" alt="ionic logo"/>
          </ion-item>

          <ion-item-group>
            <ion-grid no-padding>

              {this.chantiers.map((docs) => (
                <ion-row>
                  {docs.map(doc => (
                    <ion-col>
                      <ion-item detail={false} href={`/who-am-i/my-cv/${doc.docName}`}>
                        <div>
                          <div>
                            <img src={doc.logo} alt="logo"/>
                          </div>

                          <ion-label innerHTML={doc.title}/>
                        </div>
                      </ion-item>

                    </ion-col>
                  ))}
                </ion-row>
              ))}
            </ion-grid>
          </ion-item-group>
        </ion-list>
      </ion-content>
    ];
  }
}
