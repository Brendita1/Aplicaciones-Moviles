import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DesactivarUsuarioPage } from '../pages/desactivar-usuario/desactivar-usuario';
import { AgregarUsuarioPage } from '../pages/agregar-usuario/agregar-usuario';
import { MostrarUsuarioPage } from '../pages/mostrar-usuario/mostrar-usuario';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DesactivarUsuarioPage,
    AgregarUsuarioPage,
    MostrarUsuarioPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DesactivarUsuarioPage,
    AgregarUsuarioPage,
    MostrarUsuarioPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
