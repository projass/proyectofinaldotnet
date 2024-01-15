import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColaboradoresComponent } from '../../Colaboradores/colaboradores.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [RouterModule, ColaboradoresComponent]
})
export class MenuComponent{
 
}

