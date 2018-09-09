import {Config} from '@ionic/core';
import {Component, Prop /*Element, Listen, , State */} from '@stencil/core';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-who-am-i',
  styleUrl: 'page-who-am-i.css',
})
export class PageWhoAmI {


  @Prop({context: 'config'}) config: Config;

  documents = [
    [
      {
        color: 'blue',
        docName: 'etat-civil',
        logo: '/assets/img/ica-slidebox-img-2.png',
        title: 'Etat Civil<br/>&nbsp;'
      },
      {
        color: 'blue',
        docName: 'academic',
        logo: '/assets/img/ica-slidebox-img-2.png',
        title: 'Parcours<br/>Academique'
      }
    ],
    [
      {
        color: 'blue',
        docName: 'administration',
        logo: '/assets/img/ica-slidebox-img-2.png',
        title: 'Fonctions<br/>Administratives'
      },
      {
        color: 'blue',
        docName: 'international',
        logo: '/assets/img/ica-slidebox-img-2.png',
        title: 'Activites<br/>Internationales'
      }
    ],
    [
      {
        color: 'blue',
        docName: 'distinction',
        logo: '/assets/img/ica-slidebox-img-2.png',
        title: 'Distinctions'
      }
    ],
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

          <ion-item-group>
            <ion-grid no-padding>

              {this.documents.map((docs) => (
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
