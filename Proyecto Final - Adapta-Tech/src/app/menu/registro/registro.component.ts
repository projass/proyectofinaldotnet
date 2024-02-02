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
    avatar: undefined,
    perfilUsuario: {  // Añade la información del perfil de usuario aquí
      nombre: "",
      apellidos: "",
      telefono: "",
      fechaNacimiento: null,
      alias: ""
    }
  };

  constructor(private registerService: RegisterService, private router: Router) {}

  ngOnInit() {}

  onFileChange(event: any) {
    this.registro.avatar = event.target.files[0];
    console.log(event);
  }

  register() {
    this.registerService.register(this.registro).subscribe({
      next: (data) => {
        this.router.navigateByUrl("login");
      },
      error: (err) => {
        alert("No se ha podido realizar el registro");
      },
      complete: () => {},
    });
  }
}