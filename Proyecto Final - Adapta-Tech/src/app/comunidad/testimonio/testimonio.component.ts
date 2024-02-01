import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextoService } from '../../../services/texto.service';

@Component({
  selector: 'app-testimonio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './testimonio.component.html',
  styleUrl: './testimonio.component.css'
})
export class TestimonioComponent implements OnInit {
  constructor(private textoService: TextoService) { }

  ngOnInit(): void {
  }

  obtenerTamanoTexto(): number {
    return this.textoService.getTamanoTexto();
  }
}
