import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-inclusion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inclusion.component.html',
  styleUrl: './inclusion.component.css'
})
export class InclusionComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
