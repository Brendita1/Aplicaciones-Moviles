import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AgregarUsuarioPage } from '../agregar-usuario/agregar-usuario';
import { DesactivarUsuarioPage } from '../desactivar-usuario/desactivar-usuario';
import { MostrarUsuarioPage } from '../mostrar-usuario/mostrar-usuario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = AgregarUsuarioPage;
  tab5Root = DesactivarUsuarioPage;
  tab6Root = MostrarUsuarioPage;
  constructor() {

  }
}
