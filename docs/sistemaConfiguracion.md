# Configuración

Para nuestro proyecto en la nube debemos ser capaces de ofrecer distintas opciones de configuración desde las que probar la aplicación. 

## Criterios de elección de herramientas

Para elegir la herramienta más apropiada para nuestro proyecto vamos a seguir los siguientes criterios.

**Indice en Snyk.io**
Usaremos la página especializada [SnykAdvisor](https://snyk.io/advisor/) para valorar las herramientas candidatas.  

**Simplicidad ante estructuras complejas**
Para un proyecto de estas características, y ante duda de dos o más herramientas igual de válidas, vamos a priorizar la simplicidad en el archivo de configuración ante las estructuras más complejas y que puedan ofrecer funcionalidades adicionales.  


## Candidatos

-[Dotenv](https://github.com/motdotla/dotenv) Es un módulo sin dependencias que usa archivos .env para cargar las variables.

-[Convict](https://github.com/mozilla/node-convict) Convict es una biblioteca que permite la definición de configuraciones con esquemas y validaciones.

-[nconf](https://github.com/indexzero/nconf) Es una biblioteca sencilla y extensible para la gestión de configuraciones


## Elección

Si observamos el índice de puntuación de Convict en Snyk.io encontramos una puntuación de [70](https://snyk.io/advisor/npm-package/convict). Vemos que aunque es popular su mantenimiento en los últimos años ha decaído. Si consultamos las puntuaciones de Dotenv y nconf vemos que obtienen prácticamente la misma (86 y 87 respectivamente). Ateniéndonos al segundo criterio, y como ambas nos serán igual de útiles, vamos a escoger aquella que ofrece una configuración más directa y simple: Dotenv.


