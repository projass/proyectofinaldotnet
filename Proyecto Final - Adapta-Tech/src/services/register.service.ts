import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITokenInfo } from "../interfaces/user.interface";
import { IRegister } from "../interfaces/register.interface";


@Injectable({
    providedIn: "root",
  })

  export class RegisterService {
    urlAPI = environment.urlAPI;
  
    constructor(private http: HttpClient) {}
  
    register(registro : IRegister): Observable<any> {
      return this.http.post<ITokenInfo>(this.urlAPI + "/Registro/register", registro);
    }

  }