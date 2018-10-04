// import { Config } from '@ionic/core';
import {Component, State /*Element, Listen, , State */} from '@stencil/core';
import {ElectionsData} from '../../providers/elections-data';
import {__} from '../../providers/i18n';


@Component({
  tag: 'page-elections',
  styleUrl: 'page-elections.scss',
  // shadow: true
})
export class PageElections {


  // @Prop({ context: 'config' }) config: Config;

  @State() documents = [];

  async componentWillLoad() {
    this.documents = await ElectionsData.loadDefaultData();
  }

  componentDidLoad() {
    ElectionsData.onChange(documents => this.documents = documents);
  }

  render() {

    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            {__('PRÉSIDENTIELLES_2018')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-grid>

          <ion-row class="cv-item-group">
            <ion-grid no-padding class="item-grid">
              <ion-row class="item-row">
                {this.documents.map(({_id, color, img, section}) => (

                  <ion-col class={`item-col ${_id || 'empty'} `} style={{backgroundColor: color}}>
                    {_id
                      ? <ion-item class="item" href={`/elections/${_id}`}>

                        <ion-grid class="inner-item-grid">
                          <ion-row>
                            <ion-col text-center>
                              <ion-thumbnail class="item-icon">
                                <img-video img={img}/>
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
