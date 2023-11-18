import { Atleta } from './atleta';
import { DisponibilidadHoraria } from './disponibilidadhoraria';
import { CategoriasPeso } from './types';

export class AtletaDisponible extends Atleta {
    private _id: number;
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
        super(
            fechaNacimiento,
            nivelRendimiento,
            nivelCompromiso,
            modalidadEntreno,
            DisponibilidadHoraria,
            preferenciasContacto,
            CategoriasPeso
        );
        this._id = id;
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

}