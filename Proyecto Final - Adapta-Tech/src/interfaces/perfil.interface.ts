export interface IPerfil {
  idPerfil: number;
  usuarioId: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  fechaNacimiento: Date | null;
  avatar: File | undefined;
  alias: string;
}
