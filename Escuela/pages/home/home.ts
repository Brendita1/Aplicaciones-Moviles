import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Estudiante}from '../../Escuela/Estudiante'
import{Materias}from '../../Escuela/Materias'
import read = require('readline-sync');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    
  constructor(public navCtrl: NavController) {

  }
 
estudiante: Estudiante = new Estudiante();
arreglo_Estudiantes: Estudiante[]=[];

materias: Materias = new Materias();
arreglo_Materias: Materias[] = [];

Agregar_Materias(materia: Materias)
{
this.materias.push(materia);
}

Mostrar_info()
{
let estudiante: Estudiante;
let materias: Materias;
for(estudiante of this.arreglo_Estudiantes)
{
   console.log("Nombre:",estudiante.nombre,"Matricula:",estudiante.matricula,"Cantidad de materias:",estudiante.materias);
   
}

for(materias of this.arreglo_Materias)
{
  console.log("Nombre de la materia:",materias.nombre_materia,"Calificación:",materias.nombre_materia);
}

}
Promedio()
{
  let promedio=0;
  for(let materia of this.materias)
  {
    promedio += this.materias.length;
    return promedio;
  }
}
Main()
{
  let numero_alumnos= read.question("Ingrese numero de estudiantes");
  let numero_materias=read.question("Ingrese numero de materias");
  for(let i=0;i< numero_alumnos;i++)
  {
    this.estudiante.nombre=read.question("Ingrese su nombre");
    this.estudiante.matricula=read.question("Ingrese su matricula");
    let estudiante = new Estudiante(this.estudiante.nombre,this.estudiante.matricula);
    for(i=0;i<numero_materias;i++)
    {
      let Calificación= Number(read.question("Introduce la calificacion"));
      let materia= new Materias(this.materias.calificacion);
      estudiante.Agregar_Materias(materia);
    }
    this.arreglo_Estudiantes.push(estudiante);
  }
  let promedio =0;
  for(let i=0;i<numero_alumnos;i++)
  {
    promedio += this.estudiante.promedio();
    this.estudiante.Mostrar_info();

  }
  promedio/= this.estudiante.length;
  console.log("Promedio general:"+promedio);
}

}


