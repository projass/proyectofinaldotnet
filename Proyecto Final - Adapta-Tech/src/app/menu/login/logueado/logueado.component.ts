import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
import { IPerfil } from '../../../../interfaces/perfil.interface';
import { ITokenInfo } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-logueado',
  standalone: true,
  imports: [],
  templateUrl: './logueado.component.html',
  styleUrl: './logueado.component.css'
})
export class LogueadoComponent implements OnInit{
  email: string = '';

  usuario = JSON.parse(localStorage.getItem("usuario")!) as ITokenInfo;

  perfil!: IPerfil;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.loginService.getProfile(this.usuario.email).subscribe({
      next: (data) => {
        localStorage.setItem("perfil", JSON.stringify(data));
        this.perfil = JSON.parse(localStorage.getItem("perfil")!) as IPerfil;
      },
      error: (err: any) => {
        alert("No se pudo cargar el perfil");
      },
      complete: () => {},
    });
  }
}
