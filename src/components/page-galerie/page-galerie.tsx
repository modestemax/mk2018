import {Component, State} from '@stencil/core';
import {GaleriesData} from '../../providers/galeries-data';
import {__} from '../../providers/i18n';

@Component({
  tag: 'page-galerie',
  styleUrl: 'page-galerie.scss',
})
export class PageGalerie {


  @State() galeries: any = [];


  async componentWillLoad() {
    this.galeries = await GaleriesData.loadDefaultData();
  }

  componentDidLoad() {
    GaleriesData.onChange(galeries => this.galeries = galeries);

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {__('GALERIES_PHOTOS_ET_VIDEOS')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="galerie-list" lines="full">

          {this.galeries.map(({title, _id, details}) => (
            <ion-item-group>
              <ion-item-divider no-padding class="group-header">
                <ion-item>
                  <ion-text class="title">{title}</ion-text>
                </ion-item>
              </ion-item-divider>

              {details.map(({title}) => (

                <ion-item detail-push class="galerie-text" href={`/others/galeries/${_id}/${title}`}>
                  <ion-text> {title}</ion-text>
                </ion-item>

              ))}

            </ion-item-group>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
