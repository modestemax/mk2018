import { Component, Prop } from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-forces-detail',
  styleUrl: 'page-forces-detail.css',
})
export class PageForcesDetail {

  @Prop() goback = '/';
  @Prop() forceId = '';
  @Prop() detail = 'politique-etrangere';
  private content;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    this.content = this.getContent() || [];

  }

  getContent() {
    switch (this.forceId) {
      case 'crac':
        return this.cracContent();
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}></ion-back-button>
          </ion-buttons>
          <ion-title>
            Les Forces pour l’Alternance Urnes Paix
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {this.content ?
            <ion-list>
              <ion-list-header>
                <ion-label>
                  {this.content.title}
                </ion-label>
              </ion-list-header>
              <ion-item>
                <ion-thumbnail>
                  <img/>
                </ion-thumbnail>
              </ion-item>
              <ion-item>
                <p innerHTML={this.content.desc}/>
              </ion-item>

            </ion-list>
            : ''}
        </ion-list>
      </ion-content>
    ];
  }


  private cracContent() {

    return {
      title: 'Croire Au Cameroun [CRAC]',
      logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      desc: `<p>
Le CRAC est un parti politique reconnu par
l’arrêté N°00000250/D/MINATD/DAP/SDE/SPP
du 15 juillet 2014
</p>
<p>
Son projet place le secteur agropastoral au
cœur du développement socio-économique du
Cameroun.
</p>
<p>
Bernard Njonga
B.P.: 6203 Yaoundé
GSM: +237 679 19 81 93 / 695 89 50 36
Email: croireaucameroun1@gmail.com
Web: www.croireaucameroun.net
</p>`
    };
  }

}
