import {Config} from '@ionic/core';
import {Component, Prop /*Element, Listen, , State */} from '@stencil/core';
import {CVData} from '../../providers/cv-data';
import {__} from '../../providers/i18n';


@Component({
  tag: 'page-who-am-i',
  styleUrl: 'page-who-am-i.scss',
})
export class PageWhoAmI {


  @Prop({context: 'config'}) config: Config;

  documents = [];


  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.documents = await CVData.getDoc();
  }


  render() {

    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            {__('QUI_SUIS_JE')}
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

                  <ion-col class={`item-col ${doc.key || 'empty'} `} style={{backgroundColor: doc.color}}>
                    {doc.key
                      ? <a class="item" href={`/who-am-i/mon-cv/${doc.key}`}>

                        <ion-grid class="inner-item-grid">
                          <ion-row>
                            <ion-col text-center>
                              <ion-thumbnail class="item-icon">
                                <img src={`/assets/img/${doc.img}`} alt="logo"/>
                              </ion-thumbnail>
                            </ion-col>
                          </ion-row>
                          <ion-row>
                            <ion-col text-center>
                              <ion-text color="light" innerHTML={doc.section}/>
                            </ion-col>
                          </ion-row>
                        </ion-grid>
                      </a>
                      : ''}
                  </ion-col>

                ))}
              </ion-row>
            </ion-grid>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
