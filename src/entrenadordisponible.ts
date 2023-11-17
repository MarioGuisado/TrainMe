import { Entrenador } from './entrenador';
import { AtletaDisponible } from './atletadisponible';
import { DisponibilidadHoraria } from './disponibilidadhoraria';
import { CategoriasPeso } from './types';

export class EntrenadorDisponible extends Entrenador {
    private _id: number;
    private _atletasSugeridos: typeof AtletaDisponible[];
    private _atletasElegidos: typeof AtletaDisponible[];
    private _disponibilidad: boolean;

    constructor(
        rangoEdad: [number, number],
        nivelRendimiento: Map<number, string>,
        nivelCompromiso: Map<number, string>,
        modalidadEntreno: Map<number, string>,
        disponibilidadHorariaSemanal: DisponibilidadHoraria,
        preferenciasContacto: Map<number, string>,
        categoriasPeso: CategoriasPeso,
        id: number,
        ) 
    {
        super(rangoEdad, nivelRendimiento, nivelCompromiso, modalidadEntreno, DisponibilidadHoraria, preferenciasContacto, CategoriasPeso);
        this._id = id;
        this._atletasSugeridos = [];
        this._atletasElegidos = [];
        this._disponibilidad = true;
    }

    getId(): number {
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

    agregarAtleta(atleta: typeof AtletaDisponible): void {
        if (!(atleta instanceof AtletaDisponible)) {
            throw new TypeError('El argumento debe ser una instancia de AtletaDisponible');
        }
        if (!this._atletasElegidos.includes(atleta)) {
            this._atletasElegidos.push(atleta);
        }
    }

    sugerirAtleta(atleta: typeof AtletaDisponible): void {
        if (!(atleta instanceof AtletaDisponible)) {
            throw new TypeError('El argumento debe ser una instancia de AtletaDisponible');
        }     
        if (!this._atletasSugeridos.includes(atleta)) {
            this._atletasSugeridos.push(atleta);
        }
    }
    
}