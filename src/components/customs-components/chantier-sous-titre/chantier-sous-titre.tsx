import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'chantier-sous-titre',
  styleUrl: 'chantier-sous-titre.scss',
})
export class ChantierSousTitre {
  @Prop() color: any;
  @Prop() text: any;
  @Prop() numChantier: any;
  @Prop() key: any;


  render() {
    return [
      <ion-card class="chantier-detail" style={{ borderLeftColor: this.color }}>
        <ion-card-content>
          <ion-item-group>
            <ion-item href={this.key ? `/programme/chantier/${this.numChantier}/detail/${this.key}` : '#'}>
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
