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

export const categoriasPeso = new Map<string,[number,number]>([
    ["-66", [0, 66]],
    ["-74", [66, 74]],
    ["-83", [74, 83]],
    ["-93", [83, 93]],
    ["-105", [93, 105]],
    ["-120", [105,120 ]],
    ["+120", [120, 1000]],
])