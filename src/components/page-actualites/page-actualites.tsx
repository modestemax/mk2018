import {Component,} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-actualites',
  styleUrl: 'page-actualites.scss',
})
export class PageActualites {

  // private session: any;


  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);

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
        <mk-actualite date="November 5, 1955" title="Mon titre" img="/assets/img/advance-card-bttf.png" text={`Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy. Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
            DeLorean?! Whoa. This is heavy.`}/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
        <mk-actualite/>
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
