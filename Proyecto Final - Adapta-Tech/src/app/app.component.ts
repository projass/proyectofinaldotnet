import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu/menu.component";
import { FooterComponent } from './menu/footer/footer.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { GuiaCursorService } from '../services/guia-cursor.service';
import { Subscription } from 'rxjs';
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
  cursorPosition = { x: 0, y: 0 };
  subscription: Subscription = new Subscription;
  ngOnInit() {
    this.subscription = this.guiaCursorService.activo$.subscribe(activo => {
      if (activo) {
        document.addEventListener('mousemove', this.moverGuiaCursor);
      } else {
        document.removeEventListener('mousemove', this.moverGuiaCursor);
      }
    });
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
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleGuiaCursor(): void {
    this.guiaCursorService.toggle(); 
  }

  moverGuiaCursor(event: MouseEvent): void {
    const cursorLine = document.getElementById('cursor-line');
    if (cursorLine) {
      cursorLine.style.top = (event.clientY - 10) + 'px';
      cursorLine.style.left = (event.clientX - 250) + 'px';;
    }
  }
}