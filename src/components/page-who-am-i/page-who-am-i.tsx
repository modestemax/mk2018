import {Config} from '@ionic/core';
import {Component, Prop /*Element, Listen, , State */} from '@stencil/core';

// import { ConferenceData } from '../../providers/conference-data';
//
// import { UserData } from '../../providers/user-data';


@Component({
  tag: 'page-who-am-i',
  styleUrl: 'page-who-am-i.scss',
})
export class PageWhoAmI {


  @Prop({context: 'config'}) config: Config;

  documents = [

    {
      color: 'blue',
      docName: 'etat-civil',
      logo: '/assets/img/familly.png',
      title: 'Etat Civil'
    },
    {
      color: 'blue',
      docName: 'academic',
      logo: '/assets/img/Graduation.png',
      title: 'Parcours Academique'
    }
    ,
    {
      color: 'blue',
      docName: 'administration',
      logo: '/assets/img/government.png',
      title: 'Fonctions Administratives'
    },
    {
      color: 'blue',
      docName: 'international',
      logo: '/assets/img/international-white.png',
      title: 'Activites Internationales'
    }
    ,
    {
      color: 'blue',
      docName: 'distinction',
      logo: '/assets/img/medal.png',
      title: 'Distinctions'
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
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-grid no-padding>
          <ion-row   class="picture">
            <ion-col no-padding>
              <ion-item no-padding>
                <img src="/assets/img/who-am-i.jpg" alt="ionic logo"/>
              </ion-item>
            </ion-col>
          </ion-row>

          <ion-row class="cv-item-group">
            <ion-grid no-padding>
              <ion-row >
                {this.documents.map((doc) => (

                  // {docs.map(doc => (
                  <ion-col no-padding class="cv-item">
                    <ion-item   class="cv-item-inner" detail={false} href={`/who-am-i/mon-cv/${doc.docName}`}>
                      {/*<ion-card>*/}
                      {/*<ion-card-header>*/}
                      {/*<ion-item>*/}
                      {/*<ion-thumbnail>*/}
                      {/*<img src={doc.logo} alt="logo"/>*/}
                      {/*</ion-thumbnail>*/}
                      {/*</ion-item>*/}
                      {/*</ion-card-header>*/}
                      {/*<ion-card-content>*/}
                      {/*<span innerHTML={doc.title}/>*/}
                      {/*</ion-card-content>*/}
                      {/*</ion-card>*/}
                      <ion-grid>
                        <ion-row>
                          <ion-col text-center>
                            <ion-thumbnail class="item-icon">
                              <img src={doc.logo} alt="logo"/>
                            </ion-thumbnail>
                          </ion-col>
                        </ion-row>
                        <ion-row>
                          <ion-col text-center>
                            <span innerHTML={doc.title}/>
                          </ion-col>
                        </ion-row>
                      </ion-grid>
                    </ion-item>
                  </ion-col>
                  // ))}

                ))}
              </ion-row>
            </ion-grid>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}

//
// <ion-item>
//   <ion-grid>
//     <ion-row>
//       <ion-col text-center>
//         <button>button 1</button>
//       </ion-col>
//     </ion-row>
//     <ion-row>
//       <ion-col text-center>
//         <button>button 2</button>
//       </ion-col>
//     </ion-row>
//   </ion-grid>
//
//   <ion-grid>
//     <ion-row>
//       <ion-col text-center>
//         <button>button 1</button>
//       </ion-col>
//     </ion-row>
//     <ion-row>
//       <ion-col text-center>
//         <button>button 2</button>
//       </ion-col>
//     </ion-row>
//   </ion-grid>
// </ion-item>
