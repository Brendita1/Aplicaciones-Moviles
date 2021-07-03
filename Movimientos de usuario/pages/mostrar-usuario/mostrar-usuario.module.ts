import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarUsuarioPage } from './mostrar-usuario';

@NgModule({
  declarations: [
    MostrarUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarUsuarioPage),
  ],
})
export class MostrarUsuarioPageModule {}
