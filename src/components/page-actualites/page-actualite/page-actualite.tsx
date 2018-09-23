import {Component, Prop,} from '@stencil/core';
// import {ActualitesData} from '../../../providers/actualites-data';
import {News} from "../../../providers/news";
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-actualite',
  styleUrl: 'page-actualite.scss',
})
export class PageActualite {

  // private session: any;
  @Prop() goback = '/';

  private actualite: any;
  @Prop() _id: any;


  async componentWillLoad() {
    this.actualite = await News.get(this._id);
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            Actualité
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="cards-bg social-cards">

        <mk-actualite full {...this.actualite} />

      </ion-content>
    ];
  }


}

// {/*
// <ion-card>
//
//   <ion-item>
//     <ion-avatar item-start>
//       <img src="/assets/img/advance-card-bttf.png"/>
//     </ion-avatar>
//     <h2>Sarah Connor</h2>
//     <p>May 12, 1984</p>
//   </ion-item>
//
//   <img src="/assets/img/advance-card-bttf.png"/>
//
//   <ion-card-content>
//     <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human
//       life, maybe we can too.</p>
//   </ion-card-content>
//
//   <ion-row>
//     <ion-col>
//       <button ion-button color="primary" icon-start>
//         <ion-icon name="thumbs-up"></ion-icon>
//         30 Likes
//       </button>
//     </ion-col>
//     <ion-col>
//       <button ion-button color="primary" icon-start>
//         <ion-icon name="text"></ion-icon>
//         64 Comments
//       </button>
//     </ion-col>
//     <ion-col align-self-center text-center>
//       <ion-note>
//         30yr ago
//       </ion-note>
//     </ion-col>
//   </ion-row>
//
// </ion-card>
// */}
