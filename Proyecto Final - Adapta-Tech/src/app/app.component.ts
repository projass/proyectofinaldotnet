import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu/menu.component";
import { FooterComponent } from './menu/footer/footer.component';
import { ColaboradoresComponent } from './Colaboradores/colaboradores.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent, ColaboradoresComponent]
})
export class AppComponent {
  title = 'MiProyecto';
}
