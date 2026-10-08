import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, ComoFuncionaComponent, ProyectosComponent,
            SimuladorComponent, ContactoComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-como-funciona />
      <app-proyectos />
      <app-simulador />
      <app-contacto />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
