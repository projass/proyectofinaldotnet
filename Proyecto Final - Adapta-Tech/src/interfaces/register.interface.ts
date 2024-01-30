export interface IRegister {
    email: string;
    password: string;
    perfilUsuario: {
      nombre: string;
      apellidos: string;
      telefono: string;
      fechaNacimiento: Date | null;
      avatar: Uint8Array | null;
      alias: string;
    }
  }