import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  template: `
    <section id="contacto" class="seccion">
      <div class="fondo-img"></div>
      <div class="contenedor">
        <form class="form" #f="ngForm" (ngSubmit)="enviar(f.value)">
          <div class="texto">
            <h2 class="titulo">¿Querés invertir? Dejanos tus datos</h2>
            <p>Un asesor se comunica con vos para acompañarte en cada paso.</p>
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

          <button class="btn-cta" type="submit" [disabled]="f.invalid">Quiero que me contacten</button>
          @if (enviado()) { <p class="ok" role="status">¡Listo! Te contactamos a la brevedad.</p> }
          <p class="nota">Sin compromiso. Registrar tu interés no implica realizar una inversión.</p>
        </form>
      </div>
    </section>
  `,
  styles: `
    .seccion { position: relative; padding-top: 158px; padding-bottom: 120px; overflow: hidden; }
    .fondo-img { position: absolute; top: 0; right: 0; width: 48%; height: 100%; background: var(--img-ciudad) center / cover; border-radius: 1000px 0 0 0; opacity: .9; }
    .contenedor { position: relative; }
    .form { max-width: 576px; display: flex; flex-direction: column; gap: 20px; }
    .texto { display: grid; gap: 28px; margin-bottom: 28px; }
    .texto p { font-size: 20px; line-height: 24px; }
    .fila { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    label { display: flex; flex-direction: column; gap: 10px; font-size: 16px; color: #DCE4E1; }
    input, select { padding: 16px 20px; background: var(--verde-oscuro); border: 1px solid #4C5F5F; border-radius: 20px 4px; color: var(--crema); font: 300 16px/16px var(--font); letter-spacing: .02em; }
    input::placeholder { color: #929595; }
    input:focus, select:focus { outline: none; border: 1.5px solid var(--turquesa-btn); background: #0D2222; }
    .btn-cta { width: 100%; margin-top: 8px; color: var(--verde-oscuro); }
    .btn-cta:disabled { opacity: .5; cursor: not-allowed; }
    .nota { text-align: center; font-style: italic; font-size: 16px; color: var(--turquesa-claro); }
    .ok { color: var(--turquesa-btn); text-align: center; }
    @media (max-width: 700px) { .fila { grid-template-columns: 1fr; } .fondo-img { opacity: .2; width: 100%; } }
  `,
})
export class ContactoComponent {
  enviado = signal(false);
  enviar(datos: unknown) {
    // TODO: conectar con tu backend / servicio de email
    console.log('Contacto', datos);
    this.enviado.set(true);
  }
}
