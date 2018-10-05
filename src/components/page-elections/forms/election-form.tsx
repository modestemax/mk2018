import {ElectionsData} from "../../../providers/elections-data";
import {Ballots} from "../../../providers/ballots-data";
import {__} from "../../../providers/i18n";
import {Plugins} from '@capacitor/core';

const {Toast, /*Share*/} = Plugins;

export class ElectionForm {

  formData;
  // @Prop() goback = '/';
  // @State() editMode: boolean;
  // @State() entity: any;
  poolData: { region_id: string; division_id: string; council_id: string; pool_id: string; };

  async componentWillLoad() {
    this.formData = await ElectionsData.getProcesVerbalFormData() || {};

  }

  edit() {
    this['editMode'] = true;
  }

  cancel() {
    this['editMode'] = false;
  }

  async delete() {
    await Ballots.deleteScrutineer(this.poolData);
    this['entity'] = null;
    this['editMode'] = true;
    this.show(__('DELETE_SUCCESS'));
  }

  // async save() {
  //
  // }

  async show(text) {
    await Toast.show({text, duration: 'long'});
  }

  render() {
    let button1Text = __('UPDATE'), button1Click = this.edit.bind(this);
    let button2Text = __('DELETE'), button2Click = this.delete.bind(this);
    if (this['editMode']) {
      button1Text = __('SAVE');
      button1Click = this['save'].bind(this);
      button2Text = __('CANCEL');
      button2Click = this.cancel.bind(this);
    }

    const editMode = this['editMode'];
    const entity = this['entity'];

    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this['goback']}/>
          </ion-buttons>
          <ion-title>
            {this.formData.section}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          <ion-card-header style={{backgroundColor: this.formData.color}}>
            <div class="logo">
              <img-video img={this.formData.img} height="20%"/>
            </div>
          </ion-card-header>
          <ion-card-content>
            {/*{this.formFilter()}*/}
            <pooling-station/>
            <hr/>
            {editMode ? this['editData']() : (entity ? this['displayData']() : '')}
          </ion-card-content>
        </ion-card>
      </ion-content>,

      editMode || entity ? <ion-footer>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
            <ion-button onClick={button1Click} color="primary">{button1Text}</ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button onClick={button2Click} color="dark">{button2Text}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer> : ''
    ];
  }

  // displayData() {
  //
  // }
  //
  // editData() {
  //
  // }


}
