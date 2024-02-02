import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITokenInfo, IUser } from "../interfaces/user.interface";
import { environment } from "../environments/environment.development";
import { IPerfil } from "../interfaces/perfil.interface";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  urlAPI = environment.urlAPI;

  constructor(private http: HttpClient) {}

  //Métodos para funcionamiento de la web

  login(usuario: IUser): Observable<ITokenInfo> {
    return this.http.post<ITokenInfo>(this.urlAPI + "/Auth/login", usuario);
  }

  getProfile(email: string): Observable<IPerfil> {
    const headers = this.getHeaders();
    return this.http.get<IPerfil>(
      this.urlAPI + `/PerfilUsuario/poremail/${email}`,
      { headers: headers }
    );
  }

  getProfileById(id: number): Observable<IPerfil> {
    const headers = this.getHeaders();
    return this.http.get<IPerfil>(
      this.urlAPI + `/PerfilUsuario/perfilPorId/${id}`,
      { headers: headers }
    );
  }

  // Métodos para el funcionamiento del codigo fuenmte

  getHeaders(): HttpHeaders {
    const usuario = JSON.parse(localStorage.getItem("usuario")!) as ITokenInfo;
    const headers = new HttpHeaders({
      Authorization: "Bearer " + usuario.token,
      "Content-Type": "application/json",
    });
    return headers;
  }

  logout(): void {
    localStorage.removeItem("usuario");
  }
}
