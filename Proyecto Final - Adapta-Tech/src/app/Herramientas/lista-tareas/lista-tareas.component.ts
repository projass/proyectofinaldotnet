import { Component } from '@angular/core';
import { Lista } from '../../../interfaces/lista.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lista-tareas',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './lista-tareas.component.html',
    styleUrls: ['./lista-tareas.component.css'],

})
export class ListaTareasComponent {
    tareas: Lista[] = [
    ];

    nuevaTarea: Lista = {
        descripcion: '',
        realizada: false,
        fecha: new Date()
    };

    constructor() { }

    agregarTarea() {
        this.tareas.push(this.nuevaTarea);
        this.nuevaTarea = {
            descripcion: '',
            realizada: false,
            fecha: new Date()
        };
    }

    eliminarTarea(tarea: Lista) {
        this.tareas = this.tareas.filter(t => t !== tarea);
    }
}
