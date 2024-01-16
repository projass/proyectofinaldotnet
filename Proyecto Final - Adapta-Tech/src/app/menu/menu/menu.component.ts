import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [RouterModule]
})
export class MenuComponent implements OnInit{
    nav: HTMLElement | null = null;
    abrir: HTMLElement | null = null;
    cerrar: HTMLElement | null = null;

    constructor() {}

    ngOnInit() {
        this.nav = document.querySelector("#nav");
        this.abrir = document.querySelector("#abrir");
        this.cerrar = document.querySelector("#cerrar");

        this.abrir?.addEventListener("click", () => {
            if (this.nav?.classList) {
                this.nav.classList.add("visible");
            }
        });

        this.cerrar?.addEventListener("click", () => {
            if (this.nav?.classList) {
                this.nav.classList.remove("visible");
            }
        });
    }
}

