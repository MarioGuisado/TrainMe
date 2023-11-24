import { CategoriasPeso } from './types';

export class Atleta {
    private _id: number;
    private _fechaNacimiento: Date;
    private _nivelRendimiento: Map<string, number>;
    private _nivelCompromiso: Map<string, number>;
    private _modalidadEntreno: Map<string, number>;
    private _preferenciasContacto: Map<string, number>;
    private _categoriasPeso: typeof CategoriasPeso;
    constructor(
        fechaNacimiento: Date,
        nivelRendimiento: Map<string, number>,
        nivelCompromiso: Map<string, number>,
        modalidadEntreno: Map<string, number>,
        preferenciasContacto: Map<string, number>,
        categoriasPeso: typeof CategoriasPeso,
        id: number) 
    {
        this._id = id;
        this._fechaNacimiento = fechaNacimiento;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._preferenciasContacto = preferenciasContacto;
        this._categoriasPeso = categoriasPeso;
    }
 
    getid(): number {
        return this._id;
    }
    getfechaNacimiento(): Date {
        return this._fechaNacimiento;
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