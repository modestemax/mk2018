import { Component, Prop, } from '@stencil/core';
import {__} from "../../../providers/i18n";
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
  @Prop() video: string;
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
      return `${word.join(' ')}<ion-text class="read-more"> [${__('LIRE')} ...]</ion-text>`;
    }
    return this.text;
  }

  render() {
    const { date, titre, img , video} = this;
    const text = this.getText();

    return (
      <ion-card class="card-article">

        <ion-item>
          <p>{date}</p>
        </ion-item>
        <img-video img={img} video={video}/>

        <ion-card-content onClick={this.showFull.bind(this)}>
          <h2 class="article-title">{titre}</h2>
          <p class="article-text" innerHTML={text}/>
        </ion-card-content>

      </ion-card>
    );
  }


}
