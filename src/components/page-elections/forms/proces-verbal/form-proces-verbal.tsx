import {Component, Listen, Prop, State} from '@stencil/core';
import {Ballots} from '../../../../providers/ballots-data';
import {__} from '../../../../providers/i18n';
import {validateEmail} from '../../../../providers/tools';
import _ from 'lodash';
import {ElectionForm} from '../election-form';


@Component({
  tag: 'form-proces-verbal',
  styleUrl: 'form-proces-verbal.scss',
})
export class FormProcesVerbal {
  formType = 'proces-verbal';
  private lastName: HTMLInputElement;
  private firstName: HTMLInputElement;
  private orange: HTMLInputElement;
  private mtn: HTMLInputElement;
  private nextel: HTMLInputElement;
  private camtel: HTMLInputElement;
  private email: HTMLInputElement;
  @Prop() goback = '/';
  @State() editMode: boolean;
  @State() entity: any;

  constructor() {
    new ElectionForm(this);
  }

  @Listen('poolingStationChanged')
  async onPoolingStationChanged(event: CustomEvent) {
    this['poolData'] = event.detail.poolData;

    const pool = await Ballots.getPool(this['poolData']);
    this.entity = pool.data().procesVerbal;

    this.editMode = !this.entity;
  }


  displayData() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col>Last Name</ion-col>
          <ion-col>:{this.entity.lastName}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>First Name</ion-col>
          <ion-col>:{this.entity.firstName}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>ORANGE</ion-col>
          <ion-col>:{this.entity.orange}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>MTN</ion-col>
          <ion-col>:{this.entity.mtn}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>NEXTEL</ion-col>
          <ion-col>:{this.entity.nextel}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>CAMTEL</ion-col>
          <ion-col>:{this.entity.camtel}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Email</ion-col>
          <ion-col>:{this.entity.email}</ion-col>
        </ion-row>
      </ion-grid>
    );
  }

  editData() {
    this.entity = this.entity || {};
    return (<ion-list class="form">

      <ion-item>
        <ion-label position="floating"> {__('LAST_NAME')}</ion-label>
        <ion-input value={this.entity.lastName} ref={(el: HTMLInputElement) => this.lastName = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('FIRST_NAME')}</ion-label>
        <ion-input value={this.entity.firstName} ref={(el: HTMLInputElement) => this.firstName = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">ORANGE</ion-label>
        <ion-input value={this.entity.orange} ref={(el: HTMLInputElement) => this.orange = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">MTN</ion-label>
        <ion-input value={this.entity.mtn} ref={(el: HTMLInputElement) => this.mtn = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">NEXTEL</ion-label>
        <ion-input value={this.entity.nextel} ref={(el: HTMLInputElement) => this.nextel = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">CAMTEL</ion-label>
        <ion-input value={this.entity.camtel} ref={(el: HTMLInputElement) => this.camtel = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input value={this.entity.email} ref={(el: HTMLInputElement) => this.email = el}/>
      </ion-item>

    </ion-list>);
  }


  isValid({lastName, /*firstName,*/ orange, mtn, nextel, camtel, email}) {
    let error = '';

    if (!_.trim(lastName)) {
      error = __('NAME_ERROR');
    } else if (!(_.trim(orange) || _.trim(mtn) || _.trim(nextel) || _.trim(camtel))) {
      error = __('PHONE_ERROR');
    } else if (email && !validateEmail(email)) {
      error = __('EMAIL_ERROR');
    }
    if (error) {
      this['show'](error);
    }
    return !error;
  }

  async save() {
    const [lastName, firstName, orange, mtn, nextel, camtel, email] =
      [this.lastName.value, this.firstName.value, this.orange.value, this.mtn.value, this.nextel.value, this.camtel.value, this.email.value];

    if (this.isValid({lastName, orange, mtn, nextel, camtel, email})) {
      this.entity = {lastName, firstName, orange, mtn, nextel, camtel, email};
      await Ballots.saveScrutineer({
        ...this['poolData'] as  { region_id: string; division_id: string; council_id: string; pool_id: string; },
        scrutineer: this.entity
      });
      this['show'](__('SAVE_SUCCESS'));
      this.editMode = false;
    }
  }


}

