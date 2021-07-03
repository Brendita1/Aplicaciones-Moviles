import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuario:Usuario=new Usuario();
  constructor(public navCtrl: NavController) {

  }
  arreglo:Usuario[]=[];
  
validausu()
{
  
}
 
}
export class Usuario
{
  usuario:String="1817454";
  contraseña:String="brendita";
  carrera:string;
}