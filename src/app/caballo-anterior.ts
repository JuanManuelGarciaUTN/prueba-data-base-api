import { Tipo } from "./carrera-datos";

export interface CaballoAnterior {
    distancia?: number,
    tipo?: Tipo,
    numero?: number,
    posicion?: number,
    cuerpos?: number,
    tiempo?: number,
    spot?: number,
    peso_jockey?: number,
    jockey?: number
}
