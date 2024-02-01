import { Component, OnInit } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-descargas',
  standalone: true,
  imports: [],
  templateUrl: './descargas.component.html',
  styleUrl: './descargas.component.css'
})
export class DescargasComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
