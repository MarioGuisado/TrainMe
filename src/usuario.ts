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
 
    GetId(): number {
        return this._id;
    }
    GetNivelRendimiento(): number {
        return this._nivelRendimiento;
    }
    GetNivelCompromiso(): number {
        return this._nivelCompromiso;
    }
    GetModalidadEntreno(): number {
        return this._modalidadEntreno;
    }
    GetPreferenciasContacto(): number {
        return this._preferenciasContacto;
    }
}