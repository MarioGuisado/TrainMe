# Logs

El registro de actividad o logs, es un servicio esencial para nuestra aplicación en la nube. 

## Criterios de elección de herramientas

Para elegir la herramienta más apropiada para nuestro proyecto vamos a seguir los siguientes criterios.

**Logs estructurados**
Se dará preferencia a los logs en formato estructurado (como un JSON) frente a los no estructurados.

**Mantenimiento activo**
Aquellas herramientas que carezcan de soporte acabarán eventualmente provocando problemas. La herramienta de registro debe estar soportada actualmente.

**Comparaciones en páginas expertas**
Usaremos páginas especializadas como [SnykAdvisor](https://snyk.io/advisor/) y [Stackshare](https://stackshare.io/) para valorar los pros y contras de las herramientas candidatas. 


## Candidatos

Entre las opciones más populares (top 5% según [SnykAdvisor](https://snyk.io/advisor/)) disponibles, vamos a valorar:

-[Winston](https://github.com/winstonjs/winston) Es una biblioteca de registro flexible y ampliamente utilizada en la comunidad de Node.js.

-[Bunyan](https://github.com/trentm/node-bunyan) Es una de las bibliotecas estructuradas más conocidas aunque con el tiempo a decaído en popularidad.

-[Pino](https://github.com/pinojs/pino) Es una biblioteca de registro considerada de las más rápidas. El formato de salida es en JSON y tiene la posibilidad de aplicar "pino-pretty" a la salida para facilitar la lectura.


## Elección

Como podemos ver [aquí](https://snyk.io/advisor/npm-package/bunyan) Bunyan, aunque en su momento su uso fue muy extendido, ha dejado de ser soportado y su comunidad está decayendo. Como consecuencia se advierte que la seguridad que ofrece puede ser menor de la esperada ya que se encuentra pendiente de revisión. 
En cuanto a los otros dos candidatos, Winston y Pino, ambos cuentan con puntuaciones muy parecidas (92 y 94 respectivamente). Los dos ofrecen logs estructurados y son igual de viables para nuestro proyecto, así que nos decantaremos por Pino por ser conocido como uno de los más rápidos del mercado.

