import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Estudiante}from '../../Alumnos/Estudiante'
import{Materias}from '../../Alumnos/Materias'
import read = require ('readline-sync');
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
  let alum = read.question("Ingrese el numero de alumnos:");
  let mat = read.question("Ingrese el numero de materias:");
for (let i=0;i< alum;i++)
{
     console.log("Ingrese el nombre de la materia:"+i);
      this.ListaMaterias.push(read.question());
     
}
for(let i =0;i< mat;i++)
{
  console.log("Ingrese su nombre:");
  this.objeto_estudiante.nombre= read.question();
  console.log("Ingrese su matricula;");
  this.objeto_estudiante.matricula=read.question();

  for(i=0;i<mat;i++)
  {
    this.objeto_materias.cal= Number(read.question("Introduce calificacion:"));
    this.AgregaMaterias();
  }
  this.ListaEstudiantes.push(this.objeto_estudiante);
}
let promedio=0;
this.ListaEstudiantes.forEach(alum) => {
  promedio+= this.ListaEstudiantes.length;
}
console.log("Promedio:"+promedio);
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


