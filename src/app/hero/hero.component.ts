import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="inicio" class="hero">
      <div class="fondo"></div>
      <div class="foto" role="img" aria-label="Paisaje urbano con edificios"></div>
      <div class="contenedor texto">
        <div class="principal">
          <h1>Invertí desde 100 USD y hacé crecer tu dinero con proyectos inmobiliarios</h1>
          <p>Accedé a oportunidades inmobiliarias e invertí en propiedades junto a otros inversores, sin necesidad de financiar proyectos completos.</p>
          <a class="btn-cta" href="#proyectos">
            Explorar oportunidades
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
        <ul class="datos">
          <li>Inversión inmobiliaria online: explora y simula desde la web, y un asesor te acompaña para concretar.</li>
          <li>Inversión mínima - Desde USD 100.</li>
          <li>Retorno potencial - Según cada proyecto.</li>
          <li>Proyectos inmobiliarios - Viviendas, edificios y más</li>
        </ul>
      </div>
    </section>
  `,
  styles: `
    .hero { position: relative; min-height: 900px; overflow: hidden; display: flex; align-items: center; padding-top: 120px; }
    .fondo {
      position: absolute; inset: 215px 0 0 0;
      background: linear-gradient(1.97deg, rgba(53,213,192,.2) 5.61%, rgba(16,42,42,.2) 44.2%);
      filter: blur(4px);
    }
    .foto {
      position: absolute; top: 0; right: 0; width: min(54%, 930px); height: 900px;
      background: var(--img-ciudad) center / cover; border-radius: 600px 0 0 0;
    }
    .texto { position: relative; width: 100%; display: flex; flex-direction: column; gap: 44px; }
    .principal { display: flex; flex-direction: column; align-items: flex-start; gap: 28px; max-width: 629px; }
    h1 { font-size: clamp(34px, 4vw, 52px); line-height: 1; font-weight: 300; }
    .principal p { font-size: 20px; line-height: 24px; max-width: 469px; }
    .datos { list-style: none; margin: 0; padding: 0; width: 288px; display: grid; gap: 8px; color: var(--turquesa-claro); font-size: 12px; line-height: 16px; }
    @media (max-width: 900px) { .foto { opacity: .25; width: 100%; border-radius: 200px 0 0 0; } }
  `,
})
export class HeroComponent {}
