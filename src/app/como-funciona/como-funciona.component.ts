import { Component } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  template: `
    <section id="como-funciona" class="seccion">
      <div class="contenedor">
        <div class="intro">
          <h2 class="titulo">¿Cómo funciona el crowdfunding inmobiliario en Habiinv?</h2>
          <p>El crowdfunding inmobiliario es una inversión colectiva inmobiliaria: varias personas aportan montos pequeños para financiar juntas un proyecto, y cada una recibe un retorno proporcional a su aporte, como en una propiedad fraccionada. Así es cómo invertir en bienes raíces con Habiinv:</p>
        </div>
        <div class="pasos">
          @for (paso of pasos; track paso.titulo) {
            <article class="paso">
              <div class="img" [style.background-image]="'url(' + paso.img + ')'"></div>
              <hr>
              <h3>{{ paso.titulo }}</h3>
              <p>{{ paso.texto }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .seccion { padding-top: 100px; padding-bottom: 100px;
      background: linear-gradient(0deg, rgba(16,42,42,.7), rgba(16,42,42,.7)), var(--img-ciudad) center / cover; }
    .intro { max-width: 620px; margin: 0 auto 88px; text-align: center; display: grid; gap: 28px; }
    .intro p { font-size: 20px; line-height: 24px; }
    .pasos { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 40px; }
    .paso { background: var(--crema); color: var(--verde-oscuro); padding-bottom: 32px; display: flex; flex-direction: column; gap: 28px; min-height: 510px; }
    .img { height: 246px; background: center / cover var(--gris-panel); }
    hr { width: 100%; border: 0; border-top: 1.5px solid var(--verde); margin: 20px 0 0; }
    h3 { font-size: 44px; line-height: 44px; font-style: italic; font-weight: 400; color: var(--verde); padding: 0 16px; }
    .paso p { font-size: 20px; line-height: 24px; padding: 0 16px; }
  `,
})
export class ComoFuncionaComponent {
  pasos = [
    { titulo: 'Explorá', img: '/img/paso-1.jpg', texto: 'Encuentra proyectos inmobiliarios en los que puedes invertir y descubre nuevas oportunidades de rentabilidad.' },
    { titulo: 'Simulá',  img: '/img/paso-2.jpg', texto: 'Elegí un monto desde USD 100 y calculá cuánto podrías recibir según el proyecto y su plazo.' },
    { titulo: 'Invertí', img: '/img/paso-3.jpg', texto: 'Un asesor te acompaña para concretar tu inversión junto a otros inversores.' },
    { titulo: 'Seguí',   img: '/img/paso-4.jpg', texto: 'Seguí el avance del proyecto y recibí tu retorno proporcional a tu aporte.' },
  ];
}
