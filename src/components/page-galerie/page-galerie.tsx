import {Component} from '@stencil/core';
import {GaleriesData} from '../../providers/galeries-data';
import {__} from "../../providers/i18n";

@Component({
  tag: 'page-galerie',
  styleUrl: 'page-galerie.scss',
})
export class PageGalerie {


  data: any;

  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.data = await GaleriesData.getData();
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

          {this.data.galeries.map(({title, details}) => (
            <ion-item-group>
              <ion-item-divider no-padding class="group-header">
                <ion-item><h6 class="title">{title}</h6></ion-item>
              </ion-item-divider>

              {details.map(({numero, title}) => (

                <ion-item detail-push class="galerie-text" href={`/others/galerie/${numero}`}>
                  {title}
                </ion-item>

              ))}

            </ion-item-group>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
