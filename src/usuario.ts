import { Rendimiento, Compromiso, ModalidadEntreno, TipoContacto } from './types';


export class Usuario {
    private _id: number;
    private _nivelRendimiento: Rendimiento;
    private _nivelCompromiso: Compromiso;
    private _modalidadEntreno: ModalidadEntreno;
    private _preferenciasContacto: TipoContacto;
    constructor(
        nivelRendimiento: Rendimiento,
        nivelCompromiso: Compromiso,
        modalidadEntreno: ModalidadEntreno,
        preferenciasContacto: TipoContacto,
        id: number) 
    {
        this._id = id;
        this._nivelRendimiento = nivelRendimiento;
        this._nivelCompromiso = nivelCompromiso;
        this._modalidadEntreno = modalidadEntreno;
        this._preferenciasContacto = preferenciasContacto;
    }
 
    getId(): number {
        return this._id;
    }
    getNivelRendimiento(): number {
        return this._nivelRendimiento;
    }
    getNivelCompromiso(): number {
        return this._nivelCompromiso;
    }
    getModalidadEntreno(): number {
        return this._modalidadEntreno;
    }
    getPreferenciasContacto(): number {
        return this._preferenciasContacto;
    }
}