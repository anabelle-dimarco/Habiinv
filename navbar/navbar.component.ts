import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="wrap">
      <nav class="navbar" aria-label="Principal">
        <!-- Cuando exista public/img/logo.png se puede reemplazar este bloque por:
             <img class="logo" src="/img/logo.png" alt="Habiinv" height="40"> -->
        <a class="marca" href="#inicio" aria-label="Habiinv, ir al inicio">
          <svg class="isotipo" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M4 4h8.5v32H4z"/>
            <path d="M12.5 12h11.5A11.5 11.5 0 0 1 35.5 23.5V36H27V24.5A4.5 4.5 0 0 0 22.5 20H12.5z"/>
            <rect x="23.5" y="4" width="12" height="8.5" rx="4.25" class="acento"/>
          </svg>
          <span class="wordmark">HABIINV</span>
        </a>
        <ul>
          <li><a href="#como-funciona">¿Cómo funciona?</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#simulador">Simulador de inversión</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a class="btn-cta" href="#contacto">
          Quiero invertir
          <svg viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </a>
      </nav>
    </header>
  `,
  styles: `
    .wrap { position: absolute; top: 40px; left: 0; right: 0; padding: 0 var(--pad-x); z-index: 10; }
    .navbar {
      max-width: 1448px; margin: 0 auto; height: 80px; padding: 12px 12px 12px 28px;
      display: flex; align-items: center; justify-content: space-between; gap: 24px;
      background: rgba(250, 250, 247, .08); border: 1px solid rgba(250, 250, 247, .12);
      border-radius: 100px; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    }
    .marca { display: flex; align-items: center; gap: 12px; }
    .logo { height: 40px; width: auto; display: block; }
    .isotipo { width: 36px; height: 36px; display: block; fill: var(--blanco); }
    .isotipo .acento { fill: var(--turquesa); }
    .wordmark { font-size: 24px; font-weight: 500; letter-spacing: .16em; color: var(--blanco); }
    ul { display: flex; gap: 8px; list-style: none; margin: 0; padding: 0; }
    li a { font-size: 20px; font-weight: 400; color: var(--blanco); padding: 16px 12px; display: block; white-space: nowrap; }
    li a:hover { color: var(--turquesa-claro); }
    .btn-cta { min-height: 56px; padding: 16px 24px; }
    @media (max-width: 1240px) { li a { font-size: 17px; padding: 16px 8px; } .wordmark { font-size: 20px; } }
    @media (max-width: 1040px) { ul { display: none; } }
  `,
})
export class NavbarComponent {}
