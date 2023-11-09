export const Rendimiento = new Map<number, string>([
    [1, 'BAJO'],
    [2, 'MEDIO'],
    [3, 'ALTO'],
]);

export const Compromiso = new Map<number, string>([
    [1, 'Bajo'],
    [2, 'Medio'],
    [3, 'Alto'],
]);

export const ModalidadEntreno = new Map<number, string>([
    [0, 'PRESENCIAL'],
    [1, 'SEMIPRESENCIAL'],
    [2, 'ONLINE'],
]);

export const TipoContacto = new Map<number, string>([
    [0, 'Whatsapp'],
    [1, 'Telegram'],
    [2, 'Email'],
]);

export enum CategoriasPeso {
    MENOS_66,
    MENOS_74,
    MENOS_83,  
    MENOS_93,
    MENOS_105,
    MENOS_120,
    MAS_120,
};