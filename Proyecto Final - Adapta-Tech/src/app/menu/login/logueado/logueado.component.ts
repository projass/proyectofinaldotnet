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
    // Llama al método de LoginService para obtener la información del perfil del usuario
    this.obtenerPerfilUsuario();
  }

  obtenerPerfilUsuario(): void {
    // Verifica si el usuario está autenticado
    if (this.loginService.estaAutenticado()) {
      // Obtiene la información del perfil del usuario
      const usuario = this.loginService.obtenerUsuario();
      this.email = usuario ? usuario.email : '';
    }
  }
}
