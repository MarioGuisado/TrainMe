import { Atleta } from "./Atleta";
import { EntrenadorDisponible } from "./EntrenadorDisponible";
import { DisponibilidadHoraria } from "./DisponibilidadHoraria";

export class AtletaDisponible extends Atleta {
    private _id: number;
    private _entrenadoresSugeridos: EntrenadorDisponible[];
    private _entrenadorElegido: EntrenadorDisponible;
    private _disponibilidad: boolean;

    constructor(
        fechaNacimiento: number,
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: Map<string, [number, number]>,
        id: number,
        ) 
    {
        super(fechaNacimiento, nivelRendimiento, nivelCompromiso, modalidadEntreno, disponibilidadHorariaSemanal, preferenciasContacto, categoriasPeso);
        this._id = id;
    }
}