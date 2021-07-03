import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public attr:ActivatedRoute){
      let u:string=this.attr.snapshot.paramMap.get("usuario");
      console.log(u);
      let usuario:Usuario=JSON.parse(u);
      console.log(usuario);

      let p2=this.attr.snapshot.paramMap.get("param2");
      let array:number[]=p2.split(",").map(Number);
      for(let n of array){
        console.log(n);
      }
      let p3:any=this.attr.snapshot.paramMap.get("param3");

      console.log(p3);
      let p5=this.attr.snapshot.paramMap.get("param5");

      console.log(p5);

    }
}
