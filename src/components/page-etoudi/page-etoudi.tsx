import {Component,} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-etoudi',
  styleUrl: 'page-etoudi.css',
})
export class PageEtoudi {

  // private session: any;


  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);

  }


  render() {
    return [
      <ion-header>
        <ion-navbar>
          <ion-title>Social Card</ion-title>
        </ion-navbar>
      </ion-header>,

      <ion-content class="cards-bg social-cards">

        <ion-card>

          <ion-item>
            <ion-avatar item-start>
              <img src="/assets/img/advance-card-bttf.png"/>
            </ion-avatar>
            <h2>Marty McFly</h2>
            <p>November 5, 1955</p>
          </ion-item>

          <img src="/assets/img/advance-card-bttf.png"/>

          <ion-card-content>
            <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a
              DeLorean?! Whoa. This is heavy.</p>
          </ion-card-content>

          <ion-row>
            <ion-col>
              <button ion-button color="primary"    icon-start>
                <ion-icon name='thumbs-up'></ion-icon>
                12 Likes
              </button>
            </ion-col>
            <ion-col>
              <button ion-button color="primary"    icon-start>
                <ion-icon name='text'></ion-icon>
                4 Comments
              </button>
            </ion-col>
            <ion-col align-self-center text-center>
              <ion-note>
                11h ago
              </ion-note>
            </ion-col>
          </ion-row>

        </ion-card>


        <ion-card>

          <ion-item>
            <ion-avatar item-start>
              <img src="/assets/img/advance-card-bttf.png"/>
            </ion-avatar>
            <h2>Sarah Connor</h2>
            <p>May 12, 1984</p>
          </ion-item>

          <img src="/assets/img/advance-card-bttf.png"/>

          <ion-card-content>
            <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human
              life, maybe we can too.</p>
          </ion-card-content>

          <ion-row>
            <ion-col>
              <button ion-button color="primary"     icon-start>
                <ion-icon name='thumbs-up'></ion-icon>
                30 Likes
              </button>
            </ion-col>
            <ion-col>
              <button ion-button color="primary"     icon-start>
                <ion-icon name='text'></ion-icon>
                64 Comments
              </button>
            </ion-col>
            <ion-col align-self-center text-center>
              <ion-note>
                30yr ago
              </ion-note>
            </ion-col>
          </ion-row>

        </ion-card>


        <ion-card>

          <ion-item>
            <ion-avatar item-start>
              <img src="/assets/img/advance-card-bttf.png"/>
            </ion-avatar>
            <h2>Dr. Ian Malcolm</h2>
            <p>June 28, 1990</p>
          </ion-item>

          <img src="/assets/img/advance-card-jp.jpg"/>

          <ion-card-content>
            <p>Your scientists were so preoccupied with whether or not they could, that they didn't stop to think if they
              should.</p>
          </ion-card-content>

          <ion-row>
            <ion-col>
              <button ion-button color="primary"   icon-start>
                <ion-icon name='thumbs-up'></ion-icon>
                46 Likes
              </button>
            </ion-col>
            <ion-col>
              <button ion-button color="primary"   icon-start>
                <ion-icon name='text'></ion-icon>
                66 Comments
              </button>
            </ion-col>
            <ion-col align-self-center text-center>
              <ion-note>
                2d ago
              </ion-note>
            </ion-col>
          </ion-row>

        </ion-card>


      </ion-content>
    ]
  }


}
