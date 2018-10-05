import {Component, Listen, Prop, State} from '@stencil/core';
import {__} from '../../../../providers/i18n';
import {ElectionForm} from '../election-form';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {Ballots} from '../../../../providers/ballots-data';


@Component({
  tag: 'form-incident',
  styleUrl: 'form-incident.scss',
})
export class FormIncident {
  formType = 'incident';
  entityName = 'incident';
  @Prop() goback = '/';
  @State() editMode: boolean;
  @State() entity: any;

  private motif: HTMLInputElement;
  private commentaire: HTMLInputElement;
  private picture: string;

  constructor() {
    new ElectionForm(this);
  }

  @Listen('poolingStationChanged')
  async onPoolingStationChanged(event: CustomEvent) {
    // this['poolingStationChanged'](event);
    // debugger
    this['poolData'] = event.detail.poolData;
    if (event.detail.poolData.pool_id) {
      this['editMode'] = true;
      this.entity = null;
    }
  }


  displayData() {

  }

  editData() {
    this.entity = this.entity || {};
    return (<ion-list class="form">

      <ion-item>
        <ion-label position="floating"> {__('MOTIF')}</ion-label>
        <ion-select interface="action-sheet" ref={(el: HTMLInputElement) => this.motif = el}>
          {this['formData'].motifs.map(motif => (
            <ion-select-option value={motif}>{motif}</ion-select-option>))}
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('COMMENTAIRE')}</ion-label>
        <ion-input value={this.entity.commentaire} ref={(el: HTMLInputElement) => this.commentaire = el}/>
      </ion-item>
      <hr/>

      <ion-item>
        <img-video img={this.picture}/>
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
    this.picture = image && (image.base64Data);
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
    const [motif, commentaire] =
      [this.motif.value, this.commentaire.value
      ];
    return {
      motif, commentaire
    };
  }

  async save() {
    const entity = this['entity'] = this['buildEntity']();
    if (this['isValid'](entity)) {

      await Ballots.saveIncident({
        poolData: this['poolData'], // as  { region_id: string; division_id: string; council_id: string; pool_id: string; },
        incident: entity
      });
      await this['show'](__('SAVE_SUCCESS'));

      this['editMode'] = true;
      this['entity'] = null;
    }
  }
}

