export class Users {
  nombre!: string;
  telefono!: number;
  invitados!: Invitados[];
  n_invitados!: number;
}

export interface Invitados {
  nombre: string;
  telefono: number;
  responsable: string; //User
}
