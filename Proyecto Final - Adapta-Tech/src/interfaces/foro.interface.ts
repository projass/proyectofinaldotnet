export interface ITemaForo {
  idTema?: number;
  idTemaUsuario: number;
  titulo: string;
  fechaCreacion: Date | null;
}

export interface IMensajeForo {
  alias?: string;
  idUsuariomensaje: number;
  idPerfilUsuariomensaje: number;
  idTema: number;
  texto: string;
  fechaMensaje: Date | null;
}
