import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsignarUbicacionPage } from './asignar-ubicacion';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AsignarUbicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(AsignarUbicacionPage),
    AgmCoreModule
  ],
})
export class AsignarUbicacionPageModule {}
