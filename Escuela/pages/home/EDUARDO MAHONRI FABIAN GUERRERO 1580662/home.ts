import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Estudiante}from '../../Alumnos/Estudiante'
import{Materias}from '../../Alumnos/Materias'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    
  constructor(public navCtrl: NavController) {

  }
 
objeto_estudiante: Estudiante = new Estudiante();
ListaEstudiantes: Estudiante[]=[];

objeto_materias: Materias = new Materias();
ListaMaterias: Materias[] = [];

AgregaMaterias()
{
  this.objeto_estudiante.nombre= prompt("Nombre:");

  this.objeto_estudiante.matricula = prompt("Matricula:");
  
  this.objeto_estudiante.materias= +(prompt("Cantidad de materias"));
  
  this.objeto_materias.materia= prompt("Nombre de la materia");
  
  this.objeto_materias.cal= +(prompt("Calificacion"));
  
  this.ListaEstudiantes.push(this.objeto_estudiante);
  this.ListaMaterias.push(this.objeto_materias);
  }

Mostrarinfo()
{
 let estudiante: Estudiante;
let materias: Materias;
for(estudiante of this.ListaEstudiantes)
{
   console.log("Nombre:",estudiante.nombre,"Matricula:",estudiante.matricula,"Cantidad de materias:",estudiante.materias);
   
}

for(materias of this.ListaMaterias)
{
  console.log("Nombre de la materia:",this.objeto_materias.materia,"Calificación:",this.objeto_materias.cal);
}

}


}


