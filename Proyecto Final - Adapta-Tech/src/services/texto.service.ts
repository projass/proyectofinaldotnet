import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextoService {
  private tamanoTexto: number = 16;

  getTamanoTexto(): number {
    return this.tamanoTexto;
  }

  aumentarTexto(): void {
    this.tamanoTexto += 2;
  }

  disminuirTexto(): void {
    this.tamanoTexto -= 2;
  }
}