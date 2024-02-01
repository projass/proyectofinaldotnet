import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-ayudas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ayudas.component.html',
  styleUrl: './ayudas.component.css'
})
export class AyudasComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
