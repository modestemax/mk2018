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
    // {
    //   this.key
    //     ? <ion-item>
    //       <ion-icon src="/assets/icon/_ionicons_svg_ios-more.svg" slot="end"/>
    //     </ion-item>
    //     : ''
    // }

    return [
      <ion-card class="chantier-detail" style={{borderLeftColor: this.color}}>
        <ion-card-content>
          <ion-item-group>
            {/^http/.test(href) ?
              <a href={href} target="_blank">
                <ion-text> {this.text}</ion-text>
              </a>
              :
              <ion-item href={href}>
                <ion-text> {this.text}</ion-text>
                {this.key ? <ion-icon class="more" slot="end" name="arrow-forward"/> : ''}
              </ion-item>
            }
          </ion-item-group>
        </ion-card-content>
      </ion-card>
    ];
  }

}
