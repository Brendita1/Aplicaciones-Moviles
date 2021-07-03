import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Usuario} from '../../Modules/Usuario';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:Usuario = new Usuario();
  arreglo:Usuario []=[];

  constructor(public navCtrl: NavController) {

  }

agregarusuario()
{
  this.usuario= new Usuario();

}
}
