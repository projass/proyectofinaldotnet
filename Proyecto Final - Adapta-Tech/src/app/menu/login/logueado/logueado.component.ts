import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-logueado',
  standalone: true,
  imports: [],
  templateUrl: './logueado.component.html',
  styleUrl: './logueado.component.css'
})
export class LogueadoComponent implements OnInit{
  email: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.obtenerPerfilUsuario();
  }

  obtenerPerfilUsuario(): void {
    if (this.loginService.estaAutenticado()) {
      const usuario = this.loginService.obtenerUsuario();
      this.email = usuario ? usuario.email : '';
    }
  }
}
