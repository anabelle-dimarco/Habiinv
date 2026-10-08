import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="wrap">
      <nav class="navbar" aria-label="Principal">
        <a href="#inicio"><img class="logo" src="/img/logo.png" alt="Habiinv" height="40"></a>
        <ul>
          <li><a href="#como-funciona">¿Cómo funciona?</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#simulador">Simulador</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a class="btn-cta" href="#proyectos">
          Explorar oportunidades
          <svg viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </a>
      </nav>
    </header>
  `,
  styles: `
    .wrap { position: absolute; top: 40px; left: 0; right: 0; padding: 0 var(--pad-x); z-index: 10; }
    .navbar {
      max-width: 1448px; margin: 0 auto; height: 80px; padding: 12px 28px;
      display: flex; align-items: center; justify-content: space-between; gap: 24px;
      background: rgba(250, 250, 247, .1); border-radius: 100px; backdrop-filter: blur(8px);
    }
    .logo { height: 40px; width: auto; display: block; }
    ul { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }
    li a { font-size: 20px; font-weight: 400; color: var(--blanco); padding: 16px 12px; display: block; }
    li a:hover { color: var(--turquesa-claro); }
    .btn-cta { min-height: 56px; }
    @media (max-width: 1100px) { ul { display: none; } }
  `,
})
export class NavbarComponent {}
