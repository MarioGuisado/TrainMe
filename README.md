# TrainMe!
Repositorio de TrainMe!, para la asignatura de Infraestructura Virtual.

**Problema a Resolver:**
En el deporte de fuerza del Powerlifting existe un gran problema para los novatos que supone una enorme barrera de entrada: encontrar el entrenador que más se adecúe a su nivel y sus necesidades. Es un deporte que requiere obligatoriamente de un entrenador personal, no sólo para llevar al propio atleta en las competiciones, sino para asesorarle durante la temporada y planificar el entrenamiento. La cantidad de detalles a tener en cuenta a la hora de elegir entrenador hace que sea muy difícil para una persona nueva en el mundillo decantarse por uno.

Para poder construir un perfil al atleta se deberá extraer la información más relevante que permita sugerirle con precisión un entrenador de la base de datos:
- Nivel de rendimiento.
- Nivel de compromiso.
- Tiempo disponible semanalmente.
- Preferencia en la modalidad de entreno (presencial/semipresencial/online).
- Forma de comunicación preferida (Whatsapp/Telegram/email).
- Categoría de peso.
- Edad.
  
De la misma manera, se deberá recopilar información sobre los entrenadores registrados:
- Plazas disponibles.
- Nivel de rendimiento de atletas buscados.
- Modalidad de entreno.
- Forma de comunicación con el atleta.
- Frecuencia y disponibilidad en las comunicaciones.

## Comprobación sintaxis

Para ejecutar la tarea que comprueba la sintaxis de nuetro proyecto, ejecutamos en la terminal el comando:

```bash
npm run check
``` 
## Ejecución de tests

Para ejecutar los tests de la clase AtletaDisponible y EntrenadorDisponible usamos el comando:

```bash
npm run test
``` 
## Contenedor 

La imagen se construirá con la siguiente orden:

```bash
docker build -t marioguisado/trainme .
```

Para ejecutarlo, contamos con la orden:

```bash
docker run  -tv `pwd`:/app/test marioguisado/trainme
```
La imagen se encuentra subida a [Docker Hub](https://hub.docker.com/r/marioguisado/trainme)

## Documentación
[Configuración necesaria.](./docs/configuracion.md)

[Historias de usuario.](./docs/HUs.md)

[Milestones.](./docs/milestones.md) 

[Toolchain.](./docs/toolchain.md)

[Tests.](./docs/tests.md)

[Contenedor](./docs/contenedor.md)

[Integración Continua](./docs/integracion.md)

