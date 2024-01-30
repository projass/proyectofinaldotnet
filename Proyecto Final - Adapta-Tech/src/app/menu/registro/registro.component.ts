import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { IRegister } from "../../../interfaces/register.interface";
import { RegisterService } from "../../../services/register.service";

@Component({
  selector: "app-registro",
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: "./registro.component.html",
  styleUrl: "./registro.component.css",
})
export class RegistroComponent {
  registro: IRegister = {
    email: "",
    password: "",
    perfilUsuario: {  // Añade la información del perfil de usuario aquí
      nombre: "",
      apellidos: "",
      telefono: "",
      fechaNacimiento: null,
      avatar: null,
      alias: ""
    }
  };

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit() {}

  register() {

    this.registerService.register(this.registro).subscribe({
      next: (data) => {
        localStorage.setItem("registro", JSON.stringify(data));
        this.router.navigateByUrl("login");
      },
      error: (err) => {
        alert("No se ha podido realizar el registro");
      },
      complete: () => {},
    });
  }
}