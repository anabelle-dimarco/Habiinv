import { Component } from '@angular/core';

interface Proyecto {
  nombre: string; ubicacion: string; descripcion: string; img: string;
  detalles: { label: string; valor: string }[];
}

@Component({
  selector: 'app-proyectos',
  template: `
    <section id="proyectos" class="seccion">
      <div class="contenedor lista">
        @for (p of proyectos; track p.nombre; let i = $index) {
          <article class="card">
            <div class="foto" [style.background-image]="'url(' + p.img + ')'">
              <span class="contador">0{{ i + 1 }}/10 fotos</span>
            </div>
            <div class="info">
              <header>
                <h3>{{ p.nombre }}</h3>
                <p class="ubicacion">{{ p.ubicacion }}</p>
              </header>
              <p>{{ p.descripcion }}</p>
              <dl>
                @for (d of p.detalles; track d.label) {
                  <div><dt>{{ d.label }}</dt><dd>{{ d.valor }}</dd></div>
                }
              </dl>
              <a class="btn-cta" href="#simulador">
                Simular
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .seccion { padding-top: 100px; padding-bottom: 100px; }
    .lista { display: grid; gap: 28px; }
    .card { display: grid; grid-template-columns: 1.35fr 1fr; gap: 32px; padding: 40px; background: var(--verde-panel); border-radius: 0 80px; }
    .foto { min-height: 483px; padding: 28px; background: center / cover var(--verde); border-radius: 4px 80px 4px 40px; }
    .contador { display: inline-block; padding: 12px 16px; border-radius: 100px; background: rgba(16,42,42,.6); font-size: 20px; font-weight: 400; color: var(--blanco); }
    .info { display: flex; flex-direction: column; justify-content: flex-end; gap: 40px; padding: 16px 0; }
    h3 { font-size: 44px; line-height: 44px; font-weight: 400; color: #fff; }
    .ubicacion { font-size: 32px; line-height: 32px; font-style: italic; color: var(--turquesa); margin-top: 4px; }
    .info > p { font-size: 20px; line-height: 24px; }
    dl { margin: 0; }
    dl div { display: flex; justify-content: space-between; padding: 8px 0; border-top: 1.5px solid var(--turquesa-claro); font-size: 16px; line-height: 24px; }
    dl div:last-child { border-bottom: 1.5px solid var(--turquesa-claro); }
    dt, dd { margin: 0; }
    .btn-cta { align-self: flex-start; }
    @media (max-width: 1000px) { .card { grid-template-columns: 1fr; padding: 20px; border-radius: 0 40px; } .foto { min-height: 300px; } }
  `,
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    { nombre: 'Nova Comfort', ubicacion: 'Buenos Aires, Argentina', img: '/img/proyecto-1.jpg',
      descripcion: 'Nova Confort llega a Palermo con departamentos modernos, diseño funcional y amenities pensados para disfrutar la ciudad. Una propuesta residencial con alto potencial en una de las zonas más buscadas de Buenos Aires.',
      detalles: [ { label: 'Ubicación', valor: 'Palermo' }, { label: 'Retorno estimado', valor: '18% anual' }, { label: 'Plazo', valor: '1 año' }, { label: 'Inversión mínima', valor: 'USD 100' } ] },
    { nombre: 'Miral Towers', ubicacion: 'Buenos Aires, Argentina', img: '/img/proyecto-2.jpg',
      descripcion: 'Descripción del proyecto Miral Towers.',
      detalles: [ { label: 'Ubicación', valor: 'Por definir' }, { label: 'Retorno estimado', valor: '18% anual' }, { label: 'Plazo', valor: '3 meses' }, { label: 'Inversión mínima', valor: 'USD 100' } ] },
    { nombre: 'Atria Apartments', ubicacion: 'Medellín, Colombia', img: '/img/proyecto-3.jpg',
      descripcion: 'Descripción del proyecto Atria Apartments.',
      detalles: [ { label: 'Ubicación', valor: 'Medellín' }, { label: 'Retorno estimado', valor: '18% anual' }, { label: 'Plazo', valor: '3 meses' }, { label: 'Inversión mínima', valor: 'USD 100' } ] },
  ];
}
