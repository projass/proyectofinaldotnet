import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-ocio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ocio.component.html',
  styleUrl: './ocio.component.css'
})
export class OcioComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
