import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [MatSidenavModule,MatListModule, MatIconModule, CommonModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  constructor(private textoService: TextoService) { }

  aumentarTexto(): void {
    this.textoService.aumentarTexto();
  }

  disminuirTexto(): void {
    this.textoService.disminuirTexto();
  }
}