import { Component, OnInit } from '@angular/core';
import { TextoService } from '../../services/texto.service';
import { GuiaCursorService } from '../../services/guia-cursor.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  constructor(private textoService: TextoService, private guiaCursorService: GuiaCursorService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
  mostrarGuiaCursor() {
    this.guiaCursorService.toggleMostrarGuia();
  }

  moverGuiaCursor(event: MouseEvent) {
    this.guiaCursorService.actualizarCoordenadas(event);
  }
}
