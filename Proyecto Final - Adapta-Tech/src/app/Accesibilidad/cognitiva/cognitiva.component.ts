import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-cognitiva',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cognitiva.component.html',
  styleUrl: './cognitiva.component.css'
})
export class CognitivaComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
