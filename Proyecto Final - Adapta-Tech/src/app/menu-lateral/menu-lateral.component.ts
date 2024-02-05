import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TextoService } from '../../services/texto.service';
import { GuiaCursorService } from '../../services/guia-cursor.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [MatSidenavModule,MatListModule, MatIconModule, CommonModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  constructor(private textoService: TextoService, private guiaCursorService: GuiaCursorService) { }

  aumentarTexto(): void {
    this.textoService.aumentarTexto();
  }

  disminuirTexto(): void {
    this.textoService.disminuirTexto();
  }
  restablecer() {
    window.location.reload();
  }
  moverGuiaCursor(): void {
    this.guiaCursorService.activar();
  }

}