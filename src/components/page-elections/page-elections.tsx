// import { Config } from '@ionic/core';
import {Component, State /*Element, Listen, , State */} from '@stencil/core';
import {ElectionsData} from '../../providers/elections-data';
import {__} from '../../providers/i18n';


// import * as firebaseui from 'firebaseui'


@Component({
  tag: 'page-elections',
  styleUrl: 'page-elections.scss',
  // shadow: true
})
export class PageElections {


  // @Prop({ context: 'config' }) config: Config;

  @State() documents = [];
  @State() loggedIn: boolean;
  @State() waittingCode: boolean;
  private codeEl: HTMLInputElement;
  private authoriserEl: HTMLInputElement;
  private autorisers: any;
  private confirmationResult: any;

  async componentWillLoad() {
    this.documents = await ElectionsData.loadDefaultData();
    this.autorisers = [{phone: '+237675166459', name: 'Max'}];
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

      this.loggedIn ? this.renderContent() : this.renderLoginForm()
    ];
  }

  renderContent() {
    return <ion-content>
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
    </ion-content>;
  }

  renderLoginForm() {

    if (this.waittingCode) {
      return (
        <ion-content>
          <ion-label>Entrer le code</ion-label>
          <ion-input ref={(e: HTMLInputElement) => this.codeEl = e}/>
          <ion-button onClick={() => this.verifyCode()}>xxxx</ion-button>
        </ion-content>
      );
    } else {
      return (<ion-content>
        <div id="firebaseui-auth-container"/>
        <ion-item>
          <ion-label position="stacked">{__('SELECT_AN_AUTHORISER')}</ion-label>

          <ion-select ref={(el: HTMLInputElement) => this.authoriserEl = el} interface="action-sheet">
            {this.autorisers.map(auth => (
              <ion-select-option value={auth}>{auth.name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-button onClick={() => this.sendCode()}>Ask Code</ion-button>
        </ion-item>
      </ion-content>);
    }
  }

  sendCode() {
    const firebase = ElectionsData.firebase;

    const recaptchaVerifier = new ElectionsData.firebase.auth.RecaptchaVerifier('firebaseui-auth-container', {
      'size': 'invisible',
      'callback'(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response);
        // ...
      },
      'expired-callback'() {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    });

    firebase.auth().signInWithPhoneNumber('+237675166459', recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;

        this.waittingCode = true;
      }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.error(error);
    });
  }

  verifyCode() {
    this.confirmationResult.confirm(this.codeEl.value).then(e => {
      console.log(e);
      this.loggedIn = true;
    }).catch(() => {
      alert('bad code');
    });
  }
}

