import { CategoriasPeso } from './types';

export class Entrenador {

    private _id: number;
    private _rangoEdad: [number, number];
    private _nivelRendimiento: Map<string, number>;
    private _nivelCompromiso: Map<string, number>;
    private _modalidadEntreno: Map<string, number>;
    private _preferenciasContacto: Map<string, number>;
    private _categoriasPeso: typeof CategoriasPeso;

    constructor(
        rangoEdad: [number, number],
        nivelRendimiento: Map<string, number>,
        nivelCompromiso: Map<string, number>,
        modalidadEntreno: Map<string, number>,
        preferenciasContacto: Map<string, number>,
        categoriasPeso: typeof CategoriasPeso,
        id: number)
        
    {        
        this._id = id;
        this._rangoEdad = rangoEdad;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._preferenciasContacto = preferenciasContacto;
        this._categoriasPeso = categoriasPeso;
    }

    getid(): number {
        return this._id;
    }

    getrangoEdad(): [number, number] {
        return this._rangoEdad;
    }

    getnivelRendimiento(): Map<string, number> {
        return this._nivelRendimiento;
    }

    getnivelCompromiso(): Map<string, number> {
        return this._nivelCompromiso;
    }

    getmodalidadEntreno(): Map<string, number> {
        return this._modalidadEntreno;
    }

    getpreferenciasContacto(): Map<string, number> {
        return this._preferenciasContacto;
    }

    getcategoriasPeso(): typeof CategoriasPeso {
        return this._categoriasPeso;
    }
}