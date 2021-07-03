import { Injectable } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  ContactosList: Contacto[] = [];
  ContactoAux: Contacto;

  constructor(private storage:Storage) {
    console.log('Hello ListProvider Provider');
  }

  agregarElemento(con: Contacto): Promise<any> {
    return this.storage.get('con').then((cons: Contacto[]) =>{
      if(cons){
        cons.push(con);
        this.ContactosList.push(con);
        return this.storage.set('con', cons);
      }else{
        return this.storage.set('con', [con]);
      }
    });
  }

  leerElementos(): Promise<Contacto[]> {
    return this.storage.get('con');
    }

    obtener(){
      return this.storage.get('con');
    }

    DeleteUser(pos: number){
      this.ContactosList.splice(pos, 1);
    }
}
