type Hora = {
    hora: number,
    minutos: number
};

enum DiasSemana {
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO
};

interface TramoHorario {
    inicio: Hora,
    fin: Hora
};


export class DisponibilidadHoraria {
    
    private _tramosPorDia: Map<DiasSemana, TramoHorario[]>;

    constructor() {
        this._tramosPorDia = new Map<DiasSemana, TramoHorario[]>();
    }
}

