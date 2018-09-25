import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'chantier-sous-titre',
  styleUrl: 'chantier-sous-titre.scss',
})
export class ChantierSousTitre {
  @Prop() color: any;
  @Prop() text: any;
  @Prop() _id: any;
  @Prop() key: any;


  render() {
    let href = '#';
    if (this.key) {
      if (/^https?:\/\//.test(this.key)) {
        href = this.key;
      } else {
        href = `/programme/chantier/${this._id}/detail/${this.key}`;
      }
    }


    return [
      <ion-card class="chantier-detail" style={{borderLeftColor: this.color}}>
        <ion-card-content>
          <ion-item-group>
            <ion-item href={href}>
              <ion-text> {this.text}</ion-text>
              {this.key
                ? <ion-item>
                  <ion-icon src="/assets/icon/_ionicons_svg_ios-more.svg" slot="end"/>
                </ion-item>
                : ''}
            </ion-item>

          </ion-item-group>
        </ion-card-content>
      </ion-card>
    ];
  }

}
