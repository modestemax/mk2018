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
      docName: 'etat-civil',
      logo: '/assets/img/familly.png',
      title: 'Etat Civil'
    },
    {
      docName: 'academic',
      logo: '/assets/img/Graduation2.png',
      title: 'Parcours Academique'
    }
    ,
    {
      docName: 'administration',
      logo: '/assets/img/government.png',
      title: 'Fonctions Administratives'
    },
    {
      docName: 'international',
      logo: '/assets/img/international-white.png',
      title: 'Activites Internationales'
    }
    ,
    {
      docName: 'distinction',
      logo: '/assets/img/medal.png',
      title: 'Distinctions'
    }
    ,
    {}

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
        <ion-grid>
          <ion-row class="picture">
            <ion-col no-padding>
              <div>
                <img src="/assets/img/who-am-i.jpg" alt="ionic logo"/>
              </div>
            </ion-col>
          </ion-row>

          <ion-row class="cv-item-group">
            <ion-grid no-padding class="item-grid">
              <ion-row class="item-row">
                {this.documents.map((doc) => (

                  // {docs.map(doc => (
                  <ion-col class={`item-col ${doc.docName || 'empty'} `}>
                    {/*<ion-item   class="item" detail={false} href={`/who-am-i/mon-cv/${doc.docName}`}>*/}
                    {doc.docName
                      ? <a class="item" href={`/who-am-i/mon-cv/${doc.docName}`}>
                        {/* <ion-card>
                        <ion-card-header>
                        <ion-item>
                        <ion-thumbnail>
                        <img src={doc.logo} alt="logo"/>
                        </ion-thumbnail>
                        </ion-item>
                        </ion-card-header>
                        <ion-card-content>
                        <span innerHTML={doc.title}/>
                        </ion-card-content>
                        </ion-card>*/}
                        <ion-grid class="inner-item-grid">
                          <ion-row>
                            <ion-col text-center>
                              <ion-thumbnail class="item-icon">
                                <img src={doc.logo} alt="logo"/>
                              </ion-thumbnail>
                            </ion-col>
                          </ion-row>
                          <ion-row>
                            <ion-col text-center>
                              <ion-text color="light" innerHTML={doc.title}/>
                            </ion-col>
                          </ion-row>
                        </ion-grid>
                      </a>
                      : ''}
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
