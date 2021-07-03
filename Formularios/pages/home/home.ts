import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../Module/Usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: Usuario = new Usuario(); // Para crear un objeto

  arreglos: Usuario[]= [];  // Para crear un arreglo





  constructor(public navCtrl: NavController) {

  }


  agregarusuario(){
    this.usuario = new Usuario(); // Limpiar el objeto despues de grabar datos
    this.usuario.nombre = prompt("Ingrese su nombre"); //prompt es para mandar alertas y meter datos
    this.usuario.apellido = prompt("Ingrese su apellido");
    
    this.usuario.edad = +(prompt("Ingrese su edad")); // +(prompt()); sirve como casteo para un dato de number a text
    this.usuario.status = true;

    this.arreglos.push(this.usuario); // Meter en el arreglo (cola)

  }

  desactivarusuario(){
    let id: number = +(prompt("Ingrese el usuario"));; //let asignar una variable dentro de la funcion 
    
    this.arreglos[id].status = false; 
    

  }


  mostrarusuarios(){
    let usuario: Usuario;
    for(usuario of this.arreglos){
      if(usuario.status === true){
      console.log("Nombre: ",usuario.nombre, "Apellido: ",usuario.apellido, "Edad: ",usuario.edad);
    
    }
    }

    
  
  }
}