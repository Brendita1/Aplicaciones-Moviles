import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';
import{Usuario} from '../../Modules/Usuario';

/**
 * Generated class for the AgregarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-usuario',
  templateUrl: 'agregar-usuario.html',
})

export class AgregarUsuarioPage {
  usuario:Usuario=new Usuario();
  arreglo:Usuario[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  ionViewDidLoad() {
    this.usuario.nombre=console.log("");
    
     
    console.log('ionViewDidLoad AgregarUsuarioPage');
  
  }




  
}
