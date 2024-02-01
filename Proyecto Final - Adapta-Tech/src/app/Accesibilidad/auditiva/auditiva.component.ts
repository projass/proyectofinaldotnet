import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-auditiva',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auditiva.component.html',
  styleUrl: './auditiva.component.css'
})
export class AuditivaComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
