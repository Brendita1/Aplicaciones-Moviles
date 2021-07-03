import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
export class Locacion{
  lat: number;
  lng: number;
}

@IonicPage()
@Component({
  selector: 'page-asignar-ubicacion',
  templateUrl: 'asignar-ubicacion.html',
})
export class AsignarUbicacionPage {

  locacion: Locacion = new Locacion();

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private view: ViewController) {
    this.ObtenerLocacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsignarUbicacionPage');
    this.ObtenerLocacion();
  }

  closeModalWithObject(){
    this.view.dismiss(this.locacion);
  }

  closeModal(){
    this.view.dismiss();
  }

  ObtenerLocacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locacion = new Locacion();
      this.locacion.lat = resp.coords.latitude;
      this.locacion.lng = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  onSetMarker(event: any){
    this.locacion = new Locacion();
    this.locacion.lat = event.coords.lat;
    this.locacion.lng = event.coords.lng;
  
  }

  
}
