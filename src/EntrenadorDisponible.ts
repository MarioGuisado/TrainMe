import { Entrenador } from "./Entrenador";
import { AtletaDisponible } from "./AtletaDisponible";
import { DisponibilidadHoraria } from "./DisponibilidadHoraria";

export class EntrenadorDisponible extends Entrenador {
    private _id: number;
    private _atletasSugeridos: AtletaDisponible[];
    private _atletasElegidos: AtletaDisponible[];
    private _disponibilidad: boolean;

    constructor(
        rangoEdad: [number, number],
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: Map<string, [number, number]>,
        id: number,
        ) 
    {
        super(rangoEdad, nivelRendimiento, nivelCompromiso, modalidadEntreno, disponibilidadHorariaSemanal, preferenciasContacto, categoriasPeso);
        this._id = id;
    }
}