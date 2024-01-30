import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITokenInfo, IUser } from "../interfaces/user.interface";
import { environment } from "../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  urlAPI = environment.urlAPI;

  constructor(private http: HttpClient) {}

  login(usuario: IUser): Observable<ITokenInfo> {
    return this.http.post<ITokenInfo>(this.urlAPI + "/Auth/login", usuario);
  }

  logout(): void {
    localStorage.removeItem("usuario");
  }

  estaAutenticado(): boolean {
    // Verifica si la información del usuario está presente en el localStorage
    return !!localStorage.getItem("usuario");
  }

  obtenerUsuario(): IUser | null {
    // Obtiene la información del usuario almacenada en el localStorage
    const usuarioString = localStorage.getItem("usuario");
    return usuarioString ? JSON.parse(usuarioString) : null;
  }
}
