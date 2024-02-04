// guia-cursor.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuiaCursorService {
  mostrarGuia: boolean = false;
  guiaTop: number = 0;
  guiaLeft: number = 0;

  toggleMostrarGuia() {
    this.mostrarGuia = !this.mostrarGuia;
  }

  actualizarCoordenadas(event: MouseEvent) {
    this.guiaTop = event.clientY;
    this.guiaLeft = event.clientX;
  }
}
