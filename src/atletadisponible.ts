import { Atleta } from "./atleta";
import { EntrenadorDisponible } from "./entrenadordisponible";
import { DisponibilidadHoraria } from "./disponibilidadhoraria";
import { CategoriasPeso } from "./types";

export class AtletaDisponible extends Atleta {
    private _id: number;
    private _entrenadoresSugeridos: EntrenadorDisponible[];
    private _entrenadorElegido: EntrenadorDisponible | null;
    private _disponibilidad: boolean;

    constructor(
        fechaNacimiento: Date,
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: CategoriasPeso,
        id: number,
        ) 
    {
        super(fechaNacimiento, nivelRendimiento, nivelCompromiso, modalidadEntreno, disponibilidadHorariaSemanal, preferenciasContacto, categoriasPeso);
        this._id = id;
        this._entrenadoresSugeridos = [];
        this._entrenadorElegido = null;
        this._disponibilidad = true;
    }

    getID(): number {
        return this._id;
    }

    estaDisponible(): boolean {
        return this._disponibilidad;
    }

    asignarDisponibilidad(disponibilidad: boolean): void {
        this._disponibilidad = disponibilidad;
    }

    asignarEntrenador(entrenador: EntrenadorDisponible): void {
        this._entrenadorElegido = entrenador;
    }   

    sugerirEntrenador(entrenador: EntrenadorDisponible): void {
        if (!this._entrenadoresSugeridos.includes(entrenador)) {
            this._entrenadoresSugeridos.push(entrenador);
        }
    }

}