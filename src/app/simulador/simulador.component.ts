import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface ProyectoSim { nombre: string; ciudad: string; tasa: number; meses: number; }

@Component({
  selector: 'app-simulador',
  imports: [DecimalPipe],
  template: `
    <section id="simulador" class="seccion">
      <div class="contenedor">
        <h2 class="titulo">Simulá tu inversión</h2>

        <div class="proyectos" role="tablist">
          @for (p of proyectos; track p.nombre; let i = $index) {
            <button type="button" role="tab" [attr.aria-selected]="i === idx()" [class.activo]="i === idx()" (click)="idx.set(i)">
              <strong>{{ p.nombre }}</strong>
              <span>{{ p.ciudad }} · {{ p.tasa }}% anual · {{ plazo(p) }}</span>
            </button>
          }
        </div>

        <div class="monto-retorno">
          <label class="bloque">
            <span class="label">Quieres invertir</span>
            <span class="input">
              <input type="number" [min]="min" [max]="max" [value]="monto()" (input)="setMonto($any($event.target).value)">
              <span class="moneda">USD</span>
            </span>
          </label>
          <span class="flecha" aria-hidden="true">→</span>
          <div class="bloque retorno">
            <span class="label">Podrías recibir</span>
            <span class="total"><b>{{ total() | number:'1.0-0' }}</b> USD</span>
          </div>
        </div>

        <div class="slider">
          <input type="range" [min]="min" [max]="max" step="50" [value]="monto()" (input)="setMonto($any($event.target).value)"
                 [style.--pct]="pct() + '%'" aria-label="Monto a invertir">
          <div class="marcas"><span>100 USD</span><span>2.500</span><span>5.000</span><span>7.500</span><span>10.000 USD</span></div>
        </div>

        <div class="detalle">
          <div><small>Inversión</small><strong>{{ monto() | number:'1.0-0' }} USD</strong></div>
          <div><small>Ganancia estimada</small><strong>+{{ ganancia() | number:'1.0-2' }} USD</strong></div>
          <div><small>Retorno estimado</small><strong class="neutro">{{ actual().tasa }}% anual</strong></div>
          <div><small>Plazo</small><strong class="neutro">{{ plazo(actual()) }}</strong></div>
          <a class="btn-cta" href="#contacto">Quiero invertir</a>
        </div>
        <p class="aviso">Estimación basada en el retorno proyectado del proyecto. La rentabilidad no está garantizada.</p>
      </div>
    </section>
  `,
  styles: `
    .seccion { background: var(--blanco); color: var(--verde-oscuro); padding-top: 100px; padding-bottom: 100px; }
    .titulo { text-align: center; margin-bottom: 48px; }
    .proyectos { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 56px; }
    .proyectos button { all: unset; box-sizing: border-box; cursor: pointer; display: flex; flex-direction: column; gap: 6px; padding: 20px 24px; border: 1px solid var(--gris); border-radius: 16px; }
    .proyectos button:focus-visible { outline: 3px solid var(--turquesa); }
    .proyectos button.activo { background: var(--gris-panel); border: 2px solid var(--verde); }
    .proyectos strong { font: italic 400 28px/28px var(--font); }
    .proyectos .activo strong { color: var(--verde); }
    .proyectos span { font-size: 16px; }

    .monto-retorno { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 32px; }
    .bloque { display: flex; flex-direction: column; gap: 12px; }
    .label { font-size: 28px; line-height: 28px; }
    .input { display: flex; align-items: center; gap: 8px; width: 400px; max-width: 100%; padding: 28px; background: var(--blanco); border: 1.5px solid var(--gris); border-radius: 20px 4px; }
    .input input { all: unset; width: 100%; min-width: 0; font: italic 400 80px/80px var(--font); letter-spacing: .02em; }
    .moneda { font: italic 400 40px/40px var(--font); color: #4C5F5F; }
    .flecha { font-size: 40px; }
    .retorno { align-items: flex-end; }
    .total { font: italic 400 40px/40px var(--font); color: var(--verde); display: flex; align-items: baseline; gap: 10px; }
    .total b { font-weight: 400; font-size: 80px; line-height: 88px; letter-spacing: -.01em; }

    .slider { margin: 40px 0; }
    .slider input { width: 100%; height: 44px; appearance: none; background: transparent; cursor: pointer; }
    .slider input::-webkit-slider-runnable-track { height: 8px; border-radius: 100px; background: linear-gradient(90deg, var(--turquesa) var(--pct), var(--gris) var(--pct)); }
    .slider input::-moz-range-track { height: 8px; border-radius: 100px; background: var(--gris); }
    .slider input::-moz-range-progress { height: 8px; border-radius: 100px; background: var(--turquesa); }
    .slider input::-webkit-slider-thumb { appearance: none; width: 44px; height: 44px; margin-top: -18px; background: var(--crema); border: 3px solid var(--turquesa); box-shadow: 0 6px 16px rgba(16,42,42,.18); }
    .slider input::-moz-range-thumb { width: 38px; height: 38px; background: var(--crema); border: 3px solid var(--turquesa); border-radius: 0; box-shadow: 0 6px 16px rgba(16,42,42,.18); }
    .marcas { display: flex; justify-content: space-between; font: italic 400 16px/16px var(--font); margin-top: 8px; }

    .detalle { display: flex; flex-wrap: wrap; align-items: center; gap: 24px 32px; padding: 28px 36px; background: var(--gris-panel); border-radius: 0 40px; }
    .detalle div { flex: 1 1 160px; display: flex; flex-direction: column; gap: 8px; }
    .detalle small { font-size: 12px; line-height: 12px; color: #0D2222; }
    .detalle strong { font: italic 400 24px/24px var(--font); color: var(--verde); }
    .detalle strong.neutro { font-style: normal; font-weight: 300; color: #0D2222; }
    .detalle .btn-cta { flex: 0 0 auto; color: var(--verde-oscuro); border-color: var(--verde); }
    .aviso { margin-top: 16px; font-size: 16px; color: var(--verde); }
    @media (max-width: 800px) { .input input { font-size: 48px; line-height: 48px; } .total b { font-size: 48px; } .flecha { display: none; } .retorno { align-items: flex-start; } }
  `,
})
export class SimuladorComponent {
  readonly min = 100;
  readonly max = 10000;
  proyectos: ProyectoSim[] = [
    { nombre: 'Nova Comfort', ciudad: 'Buenos Aires', tasa: 18, meses: 12 },
    { nombre: 'Miral Towers', ciudad: 'Buenos Aires', tasa: 18, meses: 3 },
    { nombre: 'Atria Apartments', ciudad: 'Medellín', tasa: 18, meses: 3 },
  ];

  idx = signal(0);
  monto = signal(500);
  actual = computed(() => this.proyectos[this.idx()]);
  ganancia = computed(() => this.monto() * (this.actual().tasa / 100) * (this.actual().meses / 12));
  total = computed(() => this.monto() + this.ganancia());
  pct = computed(() => ((this.monto() - this.min) / (this.max - this.min)) * 100);

  setMonto(v: string | number) {
    const n = Math.round(Number(v) || this.min);
    this.monto.set(Math.min(this.max, Math.max(this.min, n)));
  }
  plazo(p: ProyectoSim) { return p.meses === 12 ? '1 año' : `${p.meses} meses`; }
}
