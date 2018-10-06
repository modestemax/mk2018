import {Component, Listen, Prop, State} from '@stencil/core';
import {__} from '../../../../providers/i18n';
import {ElectionForm} from '../election-form';
import {CameraResultType, CameraSource, Plugins} from "@capacitor/core";


@Component({
  tag: 'form-proces-verbal',
  styleUrl: 'form-proces-verbal.scss',
})
export class FormProcesVerbal {
  formType = 'proces-verbal';
  entityName = 'procesVerbal';
  @Prop() goback = '/';
  @State() editMode: boolean;
  @State() entity: any;
  private inscrits: HTMLInputElement;
  private votants: HTMLInputElement;
  private votes: HTMLInputElement;
  private nuls: HTMLInputElement;
  private blancs: HTMLInputElement;
  private kamto: HTMLInputElement;
  private akere: HTMLInputElement;
  private matomba: HTMLInputElement;
  private ndifor: HTMLInputElement;
  private cabral: HTMLInputElement;
  private osih: HTMLInputElement;
  private garga: HTMLInputElement;
  private ndam: HTMLInputElement;
  private biya: HTMLInputElement;
  private pvScan: string;

  constructor() {
    new ElectionForm(this);
  }

  @Listen('poolingStationChanged')
  async onPoolingStationChanged(event: CustomEvent) {
    this['poolingStationChanged'](event);
  }


  displayData() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col>Inscrits</ion-col>
          <ion-col>:{this.entity.inscrits}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Votants</ion-col>
          <ion-col>:{this.entity.votants}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Votes</ion-col>
          <ion-col>:{this.entity.votes}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Nuls</ion-col>
          <ion-col>:{this.entity.nuls}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Blancs</ion-col>
          <ion-col>:{this.entity.blancs}</ion-col>
        </ion-row>
        <hr/>
        <ion-row>
          <ion-col>Maurice Kamto</ion-col>
          <ion-col>:{this.entity.kamto}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Akere Muna</ion-col>
          <ion-col>:{this.entity.akere}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Serges Espor Matomba</ion-col>
          <ion-col>:{this.entity.matomba}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Ndifor Frankline</ion-col>
          <ion-col>:{this.entity.ndifor}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Cabral Libi Ngue</ion-col>
          <ion-col>:{this.entity.cabral}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Joshua Osih</ion-col>
          <ion-col>:{this.entity.osih}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Garga Aaman Adji</ion-col>
          <ion-col>:{this.entity.garga}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Adamou Ndam Njoya</ion-col>
          <ion-col>:{this.entity.ndam}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Paul Biya</ion-col>
          <ion-col>:{this.entity.biya}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>{__('PROCES_VERBAL')}</ion-col>
          <ion-col>{__('CLICK_TO_SHOW_PV')}</ion-col>
        </ion-row>
      </ion-grid>
    );
  }

  editData() {
    this.entity = this.entity || {};
    return (<ion-list class="form">

      <ion-item>
        <ion-label position="floating"> {__('INSCRITS')}</ion-label>
        <ion-input type="number" value={this.entity.inscrits} ref={(el: HTMLInputElement) => this.inscrits = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('VOTANTS')}</ion-label>
        <ion-input type="number" value={this.entity.votants} ref={(el: HTMLInputElement) => this.votants = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('VOTES')}</ion-label>
        <ion-input type="number" value={this.entity.votes} ref={(el: HTMLInputElement) => this.votes = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('NULS')}</ion-label>
        <ion-input type="number" value={this.entity.nuls} ref={(el: HTMLInputElement) => this.nuls = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('BLANCS')}</ion-label>
        <ion-input type="number" value={this.entity.blancs} ref={(el: HTMLInputElement) => this.blancs = el}/>
      </ion-item>
      <hr/>

      <ion-item>
        <ion-label position="floating"> Maurice Kamto</ion-label>
        <ion-input type="number" value={this.entity.kamto} ref={(el: HTMLInputElement) => this.kamto = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Akere Muna</ion-label>
        <ion-input type="number" value={this.entity.akere} ref={(el: HTMLInputElement) => this.akere = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Serges Espor Matomba</ion-label>
        <ion-input type="number" value={this.entity.matomba} ref={(el: HTMLInputElement) => this.matomba = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Ndifor Frankline</ion-label>
        <ion-input type="number" value={this.entity.ndifor} ref={(el: HTMLInputElement) => this.ndifor = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Cabral Libii Li Ngue</ion-label>
        <ion-input type="number" value={this.entity.cabral} ref={(el: HTMLInputElement) => this.cabral = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Joshua Osih</ion-label>
        <ion-input type="number" value={this.entity.osih} ref={(el: HTMLInputElement) => this.osih = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Garga Haman Adji</ion-label>
        <ion-input type="number" value={this.entity.garga} ref={(el: HTMLInputElement) => this.garga = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Adamou Ndam Njoya</ion-label>
        <ion-input type="number" value={this.entity.ndam} ref={(el: HTMLInputElement) => this.ndam = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Paul Biya</ion-label>
        <ion-input type="number" value={this.entity.biya} ref={(el: HTMLInputElement) => this.biya = el}/>
      </ion-item>
      <ion-item>
        <img-video img={this.pvScan}/>
        <button onClick={this.takePicture.bind(this)} ion-button color="primary"> __('ATTACH_PV')
          <ion-icon name="camera"></ion-icon>
        </button>

      </ion-item>

    </ion-list>);
  }

  async takePicture() {
    const {Camera} = Plugins;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.pvScan = image && (image.base64Data);
  }


  isValid({/*lastName, /!*firstName,*!/ orange, mtn, nextel, camtel, email*/}) {
    const error = '';

    // if (!_.trim(lastName)) {
    //   error = __('NAME_ERROR');
    // } else if (!(_.trim(orange) || _.trim(mtn) || _.trim(nextel) || _.trim(camtel))) {
    //   error = __('PHONE_ERROR');
    // } else if (email && !validateEmail(email)) {
    //   error = __('EMAIL_ERROR');
    // }
    // if (error) {
    //   this['show'](error);
    // }
    return !error;
  }


  buildEntity() {
    const [inscrits, votants, votes, nuls, blancs,
      kamto, akere, matomba, ndifor, cabral, osih, garga, ndam, biya] =
      [this.inscrits.value, this.votants.value, this.votes.value, this.nuls.value, this.blancs.value,
        this.kamto.value, this.akere.value, this.matomba.value, this.ndifor.value,
        this.cabral.value, this.osih.value, this.garga.value, this.ndam.value, this.biya.value
      ];
    return {
      inscrits, votants, votes, nuls, blancs,
      kamto, akere, matomba, ndifor, cabral, osih, garga, ndam, biya
    };
  }


}

