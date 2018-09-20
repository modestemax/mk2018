import { Component, } from '@stencil/core';
import { ActualitesData } from '../../providers/actualites-data';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-actualites',
  styleUrl: 'page-actualites.scss',
})
export class PageActualites {
  private actualites = [];


  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.actualites = await ActualitesData.getRecents(10);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Actualités
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="cards-bg social-cards">
        {this.actualites.map(actualite => (<mk-actualite {...actualite} />))}
      </ion-content>
    ];
  }


}
