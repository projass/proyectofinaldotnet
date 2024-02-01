import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-visual',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './visual.component.html',
  styleUrl: './visual.component.css'
})
export class VisualComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
