
const Atleta = require("./atleta").Atleta;
//const EntrenadorDisponible = require("./entrenadordisponible").EntrenadorDisponible;
import { EntrenadorDisponible } from "./entrenadordisponible";
const DisponibilidadHoraria = require("./disponibilidadhoraria").DisponibilidadHoraria;
const CategoriasPeso = require("./types").CategoriasPeso;

export class AtletaDisponible extends Atleta {
    private _id: number;
    private _entrenadoresSugeridos: typeof EntrenadorDisponible[];
    private _entrenadorElegido: typeof EntrenadorDisponible | null;
    private _disponibilidad: boolean;

    constructor(
        fechaNacimiento: Date,
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: typeof DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: typeof CategoriasPeso,
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
        if (typeof disponibilidad !== 'boolean') {
            throw new TypeError('El argumento debe ser un booleano');
        }
        this._disponibilidad = disponibilidad;
    }

    asignarEntrenador(entrenador: typeof EntrenadorDisponible): void {
        if (!(entrenador instanceof EntrenadorDisponible)) {
            throw new TypeError('El argumento debe ser una instancia de EntrenadorDisponible');
        }
        this._entrenadorElegido = entrenador;
    }   

    sugerirEntrenador(entrenador: typeof EntrenadorDisponible): void {
        if (!(entrenador instanceof EntrenadorDisponible)) {
            throw new TypeError('El argumento debe ser una instancia de EntrenadorDisponible');
        }
        if (!this._entrenadoresSugeridos.includes(entrenador)) {
            this._entrenadoresSugeridos.push(entrenador);
        }
    }

}