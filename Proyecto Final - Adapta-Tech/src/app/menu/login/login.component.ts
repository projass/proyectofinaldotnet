import { Component, NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { IUser } from "../../../interfaces/user.interface";
import { LoginService } from "../../../services/login.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  usuario: IUser = {
    email: "",
    password: "",
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService.login(this.usuario).subscribe({
      next: (data) => {
        localStorage.setItem("usuario", JSON.stringify(data));
        this.router.navigateByUrl("logueado");
      },
      error: (err) => {
        alert("Credenciales erróneas");
      },
      complete: () => {},
    });
  }
}
