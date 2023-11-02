import { CaballoAnterior } from "./caballo-anterior";

export interface Caballo{
    actual: CaballoActual,
    anterior: CaballoAnterior[]
}
export interface CaballoActual {
    numero?:number,
    sexo?: Sexo,
    edad?: number,
    peso_jockey?: number,
    jockey?: number,
    peso_caballo?: number,
    spot?: number,
}

export enum Sexo{
    ninguno,
    macho,
    hembra
}
