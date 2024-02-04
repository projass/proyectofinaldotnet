import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu/menu.component";
import { FooterComponent } from './menu/footer/footer.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { GuiaCursorService } from '../services/guia-cursor.service';
declare function aceptarCookies(): void;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent, ColaboradoresComponent, MenuLateralComponent]
})
export class AppComponent implements OnInit{
  title = 'MiProyecto';
  ngOnInit() {
  }
  constructor(public guiaCursorService: GuiaCursorService) {}
  
  aceptarCookies() {
    const galletitasElement = document.querySelector('.galletitas') as HTMLElement;
    const contenedorCookiesElement = document.querySelector('.contenedor-cookies') as HTMLElement;

    if (galletitasElement && contenedorCookiesElement) {
      galletitasElement.style.display = 'none';
      contenedorCookiesElement.parentNode?.removeChild(contenedorCookiesElement);
    }
  }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  mostrarGuiaCursor() {
    this.guiaCursorService.toggleMostrarGuia();
  }

  moverGuiaCursor(event: MouseEvent) {
    this.guiaCursorService.actualizarCoordenadas(event);
  }
}