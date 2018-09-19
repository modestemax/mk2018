import { Component, Prop, } from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'mk-actualite',
  styleUrl: 'mk-actualite.scss',
})
export class MkActualite {

  // private session: any;
  @Prop() date: string;
  @Prop() title: string;
  @Prop() text = '';
  @Prop() img: string;
  private shortText;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    const word = this.text.slice(0, 140).split(' ');
    word.pop();
    this.shortText = word.join(' ');
  }


  render() {
    const { date, title, shortText, img } = this;
    return (
      <ion-card class="card-article">

        <ion-item>
          <p>{date}</p>
        </ion-item>

        <img src={img}/>

        <ion-card-content>
          <h2 class="article-title">{title}</h2>
          <p>{shortText}
            <ion-text class="read-more">[...]</ion-text>
          </p>
        </ion-card-content>

      </ion-card>
    );
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
