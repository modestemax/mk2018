import {Component, Listen, Prop, State} from '@stencil/core';
import {Ballots} from '../../../../providers/ballots-data';
import {__} from '../../../../providers/i18n';
import {validateEmail} from '../../../../providers/tools';
import _ from 'lodash';
import {ElectionForm} from '../election-form';


@Component({
  tag: 'form-scrutateur',
  styleUrl: 'form-scrutateur.scss',
})
export class FormScrutateur {

  formType = 'scrutateur';
  entityName = 'scrutineer';

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
    this['poolingStationChanged'](event)
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
        <ion-input type="email" value={this.entity.email} ref={(el: HTMLInputElement) => this.email = el}/>
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

  buildEntity() {
    const [lastName, firstName, orange, mtn, nextel, camtel, email] =
      [this.lastName.value, this.firstName.value, this.orange.value, this.mtn.value, this.nextel.value, this.camtel.value, this.email.value];
    return {lastName, firstName, orange, mtn, nextel, camtel, email};
  }


  // @Prop() _id: string;
  // @Prop() goback = '/';
  // private formData;
  // private poolData: { region_id: string; division_id: string; council_id: string; pool_id: string; };
  // @State() scrutineer: any;
  // @State() editMode: boolean;
  // private lastName: HTMLInputElement;
  // private firstName: HTMLInputElement;
  // private orange: HTMLInputElement;
  // private mtn: HTMLInputElement;
  // private nextel: HTMLInputElement;
  // private camtel: HTMLInputElement;
  // private email: HTMLInputElement;
  //
  //
  // async componentWillLoad() {
  //   this.formData = await ElectionsData.getScrutineerFormData() || {};
  //
  // }
  //
  // @Listen('poolingStationChanged')
  // async onPoolingStationChanged(event: CustomEvent) {
  //   this.poolData = event.detail.poolData;
  //
  //   const pool = await Ballots.getPool(this.poolData);
  //   this.scrutineer = pool.data().procesVerbal;
  //
  //   this.editMode = !this.scrutineer;
  // }
  //
  //
  // render1() {
  //   return <h1>NANA</h1>;
  // }
  //
  // render() {
  //   let button1Text = __('UPDATE'), button1Click = this.edit.bind(this);
  //   let button2Text = __('DELETE'), button2Click = this.delete.bind(this);
  //   if (this.editMode) {
  //     button1Text = __('SAVE');
  //     button1Click = this.save.bind(this);
  //     button2Text = __('CANCEL');
  //     button2Click = this.cancel.bind(this);
  //   }
  //
  //   return [
  //     <ion-header>
  //       <ion-toolbar>
  //         <ion-buttons slot="start">
  //           <ion-back-button defaultHref={this.goback}/>
  //         </ion-buttons>
  //         <ion-title>
  //           {this.formData.section}
  //         </ion-title>
  //
  //         <ion-buttons slot="end">
  //           <ion-menu-button/>
  //         </ion-buttons>
  //       </ion-toolbar>
  //     </ion-header>,
  //
  //     <ion-content>
  //       <ion-card class="content-detail">
  //         <ion-card-header class={`header ${this._id} `} style={{backgroundColor: this.formData.color}}>
  //           <div class="logo">
  //             <img-video img={this.formData.img} height="20%"/>
  //           </div>
  //         </ion-card-header>
  //         <ion-card-content>
  //           {/*{this.formFilter()}*/}
  //           <pooling-station/>
  //           <hr/>
  //           {this.editMode ? this.formScrutineer() : (this.scrutineer ? this.displayScrutineer() : '')}
  //         </ion-card-content>
  //       </ion-card>
  //     </ion-content>,
  //
  //     this.editMode || this.scrutineer ? <ion-footer>
  //       <ion-toolbar color="light">
  //         <ion-buttons slot="start">
  //           <ion-button onClick={button1Click} color="primary">{button1Text}</ion-button>
  //         </ion-buttons>
  //         <ion-buttons slot="end">
  //           <ion-button onClick={button2Click} color="dark">{button2Text}</ion-button>
  //         </ion-buttons>
  //       </ion-toolbar>
  //     </ion-footer> : ''
  //   ];
  // }
  //
  // displayScrutineer() {
  //   return (
  //     <ion-grid>
  //       <ion-row>
  //         <ion-col>Last Name</ion-col>
  //         <ion-col>:{this.scrutineer.lastName}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>First Name</ion-col>
  //         <ion-col>:{this.scrutineer.firstName}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>ORANGE</ion-col>
  //         <ion-col>:{this.scrutineer.orange}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>MTN</ion-col>
  //         <ion-col>:{this.scrutineer.mtn}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>NEXTEL</ion-col>
  //         <ion-col>:{this.scrutineer.nextel}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>CAMTEL</ion-col>
  //         <ion-col>:{this.scrutineer.camtel}</ion-col>
  //       </ion-row>
  //       <ion-row>
  //         <ion-col>Email</ion-col>
  //         <ion-col>:{this.scrutineer.email}</ion-col>
  //       </ion-row>
  //     </ion-grid>
  //   );
  // }
  //
  // formScrutineer() {
  //   this.scrutineer = this.scrutineer || {};
  //   return (<ion-list class="form">
  //
  //     <ion-item>
  //       <ion-label position="floating"> {__('LAST_NAME')}</ion-label>
  //       <ion-input value={this.scrutineer.lastName} ref={(el: HTMLInputElement) => this.lastName = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">{__('FIRST_NAME')}</ion-label>
  //       <ion-input value={this.scrutineer.firstName} ref={(el: HTMLInputElement) => this.firstName = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">ORANGE</ion-label>
  //       <ion-input value={this.scrutineer.orange} ref={(el: HTMLInputElement) => this.orange = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">MTN</ion-label>
  //       <ion-input value={this.scrutineer.mtn} ref={(el: HTMLInputElement) => this.mtn = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">NEXTEL</ion-label>
  //       <ion-input value={this.scrutineer.nextel} ref={(el: HTMLInputElement) => this.nextel = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">CAMTEL</ion-label>
  //       <ion-input value={this.scrutineer.camtel} ref={(el: HTMLInputElement) => this.camtel = el}/>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label position="floating">Email</ion-label>
  //       <ion-input value={this.scrutineer.email} ref={(el: HTMLInputElement) => this.email = el}/>
  //     </ion-item>
  //
  //   </ion-list>);
  // }
  //
  // async show(text) {
  //   await Toast.show({text, duration: 'long'});
  // }
  //
  // isValid({lastName, /*firstName,*/ orange, mtn, nextel, camtel, email}) {
  //   let error = '';
  //
  //   if (!_.trim(lastName)) {
  //     error = __('NAME_ERROR');
  //   } else if (!(_.trim(orange) || _.trim(mtn) || _.trim(nextel) || _.trim(camtel))) {
  //     error = __('PHONE_ERROR');
  //   } else if (email && !validateEmail(email)) {
  //     error = __('EMAIL_ERROR');
  //   }
  //   if (error) {
  //     this.show(error);
  //   }
  //   return !error;
  // }
  //
  // async save() {
  //   const [lastName, firstName, orange, mtn, nextel, camtel, email] =
  //     [this.lastName.value, this.firstName.value, this.orange.value, this.mtn.value, this.nextel.value, this.camtel.value, this.email.value];
  //
  //   if (this.isValid({lastName, orange, mtn, nextel, camtel, email})) {
  //     this.scrutineer = {lastName, firstName, orange, mtn, nextel, camtel, email};
  //     await Ballots.saveScrutineer({
  //       ...this.poolData,
  //       scrutineer: this.scrutineer
  //     });
  //     this.show(__('SAVE_SUCCESS'));
  //     this.editMode = false;
  //   }
  // }
  //
  // async delete() {
  //   await Ballots.deleteScrutineer(this.poolData);
  //   this.scrutineer = null;
  //   this.editMode = true;
  //   this.show(__('DELETE_SUCCESS'));
  // }
  //
  // edit() {
  //   this.editMode = true;
  // }
  //
  // cancel() {
  //   this.editMode = false;
  // }

}

