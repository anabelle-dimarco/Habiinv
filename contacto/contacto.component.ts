import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  template: `
    <section id="contacto" class="seccion">
      <div class="fondo-img"></div>
      <div class="contenedor">
        <form class="form" #f="ngForm" (ngSubmit)="enviar(f)" novalidate>
          <div class="texto">
            <h2 class="titulo">¿Estás listo para empezar a <em>invertir</em>?</h2>
            <p>Déjanos tus datos y un asesor te guía paso a paso. No necesitas experiencia previa.</p>
          </div>

          <div class="fila">
            <label>Nombre
              <input name="nombre" ngModel required placeholder="Tu nombre">
            </label>
            <label>Teléfono
              <input name="telefono" type="tel" ngModel required placeholder="+54 9 351 000 0000">
            </label>
          </div>
          <label>Correo electrónico
            <input name="email" type="email" ngModel required email placeholder="nombre@correo.com">
          </label>
          <label>Proyecto de interés
            <select name="proyecto" ngModel="Nova Comfort">
              <option>Nova Comfort</option>
              <option>Miral Towers</option>
              <option>Atria Apartments</option>
            </select>
          </label>

          <button class="btn-cta" type="submit">
            Explorar oportunidades
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
          @if (f.submitted && f.invalid) { <p class="error" role="alert">Completá los campos marcados para continuar.</p> }
          @if (enviado()) { <p class="ok" role="status">¡Listo! Te contactamos a la brevedad.</p> }
          <p class="nota">Sin compromiso. Registrar tu interés no te obliga a invertir.</p>
        </form>
      </div>
    </section>
  `,
  styles: `
    .seccion { position: relative; padding-top: 158px; padding-bottom: 120px; overflow: hidden; background: var(--verde-oscuro); }
    .fondo-img {
      position: absolute; top: 0; right: 0; width: 49%; height: 100%;
    }

    .fondo-img::before {
      content: ''; position: absolute; inset: 0 0 0 -2%;
      background: linear-gradient(360deg, rgba(53, 213, 192, .4) 0%, rgba(16, 42, 42, .4) 81.73%);
      -webkit-mask-image: linear-gradient(to right, transparent, #000 4%);
      mask-image: linear-gradient(to right, transparent, #000 4%);
    }

    .fondo-img::after {
      content: ''; position: absolute; inset: 0;
      background: var(--img-ciudad) center / cover;
      border-top-left-radius: 100% 100%;
    }
    .contenedor { position: relative; }
    .form { max-width: 576px; display: flex; flex-direction: column; gap: 20px; }
    .texto { display: grid; gap: 28px; margin-bottom: 28px; }
    .titulo em { color: var(--turquesa); }
    .texto p { font-size: 20px; line-height: 24px; }
    .fila { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    label { display: flex; flex-direction: column; gap: 10px; font-size: 16px; color: #DCE4E1; }
    input, select { padding: 16px 20px; background: var(--verde-oscuro); border: 1px solid #4C5F5F; border-radius: 20px 4px; color: var(--crema); font: 300 16px/16px var(--font); letter-spacing: .02em; }
    input::placeholder { color: #929595; }
    input:focus, select:focus { outline: none; border: 1.5px solid var(--turquesa-btn); background: #0D2222; }
    .btn-cta { width: 100%; max-width: 576px; height: 58px; margin-top: 8px; color: var(--verde-oscuro); }
    input.ng-invalid.ng-touched { border-color: #E5736A; }
    .error { color: #E5736A; text-align: center; }
    .nota { text-align: center; font-style: italic; font-size: 16px; color: var(--turquesa-claro); }
    .ok { color: var(--turquesa-btn); text-align: center; }
    @media (max-width: 700px) { .fila { grid-template-columns: 1fr; } .fondo-img { opacity: .2; width: 100%; } }
  `,
})
export class ContactoComponent {
  enviado = signal(false);
  enviar(f: NgForm) {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }

    console.log('Contacto', f.value);
    this.enviado.set(true);
  }
}

