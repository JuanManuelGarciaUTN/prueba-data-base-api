import { Caballo } from "./caballo-actual";

export interface CarreraDatos {
    id:string,
    tipo: Tipo,
    distancia: number,
    ganador: number,
    caballos: Caballo[]
}

export enum Tipo{
    ninguno,
    arena,
    pasto
}
