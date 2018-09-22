import { Component, Prop, } from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'mk-actualite',
  styleUrl: 'mk-actualite.scss',
})
export class MkActualite {

  // private session: any;
  @Prop() _id: any;
  @Prop() date: string;
  @Prop() titre: string;
  @Prop() text = '';
  @Prop() img: string;
  @Prop() full = false;

  private actualiteUrl = '/actualites';
  private router;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    this.router = document.querySelector('ion-router');
  }

  showFull() {
    this.full || this.router.push(`${this.actualiteUrl}/${this._id}`);
  }

  private getText() {

    if (!this.full) {
      const word = this.text.slice(0, 140).split(' ');
      word.pop();
      return word.join(' ') + `<ion-text className="read-more">[...]</ion-text>`;
    }
    return this.text;
  }

  render() {
    const { date, titre, img } = this;
    const text = this.getText();

    return (
      <ion-card class="card-article">

        <ion-item>
          <p>{date}</p>
        </ion-item>

        <img src={img}/>

        <ion-card-content onClick={this.showFull.bind(this)}>
          <h2 class="article-title">{titre}</h2>
          <p innerHTML={text}/>
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
