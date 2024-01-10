import { Component } from '@angular/core';
import { GlobalModule } from "../../global/global.module";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [GlobalModule]
})
export class MenuComponent{

}

