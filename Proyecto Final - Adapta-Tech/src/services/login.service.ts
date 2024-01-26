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
}
