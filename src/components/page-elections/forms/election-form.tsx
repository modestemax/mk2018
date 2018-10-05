import {ElectionsData} from '../../../providers/elections-data';
import {Ballots} from '../../../providers/ballots-data';
import {__} from '../../../providers/i18n';
import {Plugins} from '@capacitor/core';

const {Toast, /*Share*/} = Plugins;

export class ElectionForm {

  formData;
  // @Prop() goback = '/';
  // @State() editMode: boolean;
  // @State() entity: any;
  poolData: { region_id: string; division_id: string; council_id: string; pool_id: string; };

  constructor($this) {
    $this.formData = this.formData;
    $this.poolData = this.poolData;
    $this.componentWillLoad = this.componentWillLoad.bind($this);
    $this.edit = this.edit.bind($this);
    $this.cancel = this.cancel.bind($this);
    $this.delete = this.delete.bind($this);
    $this.show = this.show.bind($this);
    $this.save = this.save.bind($this);
    $this.render = this.render.bind($this);
    $this.poolingStationChanged = this.poolingStationChanged.bind($this);
  }

  async poolingStationChanged(event) {
    this['poolData'] = event.detail.poolData;
    if (event.detail.poolData.pool_id) {
      const pool = await Ballots.getPool(this['poolData']);
      this['entity'] = pool && pool.data()[this['entityName']];
      this['editMode'] = !this['entity'];
    } else {
      this['editMode'] = false;
    }
  }

  async componentWillLoad() {
    this.formData = await ElectionsData.getFormData(this['formType']) || {};

  }

  edit() {
    this['editMode'] = true;
  }

  cancel() {
    this['editMode'] = false;
  }

  async delete() {
    await Ballots.delete({poolData: this.poolData, entityName: this['entityName']});
    this['entity'] = null;
    this['editMode'] = true;
    this.show(__('DELETE_SUCCESS'));
  }

  async save() {
    const entity = this['entity'] = this['buildEntity']();
    if (this['isValid'](entity)) {

      await Ballots.save({
        poolData: this['poolData'], // as  { region_id: string; division_id: string; council_id: string; pool_id: string; },
        entity,
        entityName: this['entityName']
      });
      this['show'](__('SAVE_SUCCESS'));
      this['editMode'] = false;
    }
  }

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
            {__('PRÉSIDENTIELLES_2018')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          <ion-card-header style={{backgroundColor: this.formData.color}}>
            <ion-item>
              <ion-thumbnail class="logo">
                <img-video img={this.formData.img} height="20%"/>
              </ion-thumbnail>
              <ion-text color="light" class="page-title">{this.formData.section}</ion-text>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
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
