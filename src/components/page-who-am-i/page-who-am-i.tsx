import { Config } from '@ionic/core';
import { Component, Prop, State /*Element, Listen, , State */ } from '@stencil/core';
import { CVData } from '../../providers/cv-data';
import { __ } from '../../providers/i18n';


@Component({
  tag: 'page-who-am-i',
  styleUrl: 'page-who-am-i.scss',
})
export class PageWhoAmI {


  @Prop({ context: 'config' }) config: Config;

  @State() documents = [];

  async componentWillLoad() {
    this.documents = await CVData.loadDefaultData();
  }

  componentDidLoad() {
    CVData.onChange(documents => this.documents = documents);
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
                {this.documents.map(({ _id, color, img, section }) => (

                  <ion-col class={`item-col ${_id || 'empty'} `} style={{ backgroundColor: color }}>
                    {_id
                      ? <ion-item class="item" href={`/who-am-i/${_id}`}>

                        <ion-grid class="inner-item-grid">
                          <ion-row>
                            <ion-col text-center>
                              <ion-thumbnail class="item-icon">
                                <img src={`/assets/img/${img}`} alt="logo"/>
                              </ion-thumbnail>
                            </ion-col>
                          </ion-row>
                          <ion-row>
                            <ion-col text-center>
                              <ion-text color="light" innerHTML={section}/>
                            </ion-col>
                          </ion-row>
                        </ion-grid>
                      </ion-item>
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
