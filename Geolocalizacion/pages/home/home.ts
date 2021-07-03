import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modal: ModalController) {

  }
  Ubicame(){
    const onModal: Modal = this.modal.create('AgregarLugarPage');
    onModal.present();
  }

}
