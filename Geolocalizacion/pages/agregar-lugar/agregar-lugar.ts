import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Modal } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Lugar } from '../../models/Lugar';
import { Locacion } from '../../models/Locacion';

@IonicPage()
@Component({
  selector: 'page-agregar-lugar',
  templateUrl: 'agregar-lugar.html',
})
export class AgregarLugarPage {

  lugar: Lugar = new Lugar();
map:any;
image:any;
  constructor( private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal:ModalController) {
  
} 
 

  closeModal(){
    this.view.dismiss();
  }

  AbrirMapa(){
    const onModal:Modal = this.modal.create('AsignarUbicacionPage');
    onModal.present();

    onModal.onDidDismiss((loc: any)=>{
      if(loc != null){
        this.lugar.locacion = new Locacion();
        this.lugar.locacion.lat = loc.lat;
        this.lugar.locacion.lng = loc.lng;
       // this.image='assets/imgs/icon.png';
      }
    })

  }

  ObtenerLocacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lugar.locacion = new Locacion();
      this.lugar.locacion.lat = resp.coords.latitude;
      this.lugar.locacion.lng = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  
  AgregarLugar(){
    this.view.dismiss(this.lugar);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarLugarPage');
  }

  

}
