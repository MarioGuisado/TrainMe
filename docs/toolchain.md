
# Toolchain

## Criterios de elección

A continuación, se describen los criterios de elección de las herramientas que se emplearán en la toolchain que estableceremos para este proyecto.


**Integración con el lenguaje** Como es natural, lo primero será acotar las herramientas disponibles a aquellas que tengan compatibilidad con el lenguaje en el que implementaremos el proyecto, en este caso, TypeScript.

**Requisitos del propio proyecto** Existen herramientas que permiten automatizar muchas más tareas de las que previsiblemente automatizaremos en este caso. No se debe sobrecomplicar la elección.

**Facilidad de configuración** Siguiendo con la norma establecida en el criterio anterior, de la misma manera que no es necesario emplear una herramienta que ofrezca muchas más posibilidades de las que queremos, tampoco será necesario emplear aquellas cuya configuración sea muy complicada, teniendo en cuenta que se está desarrollando un proyecto relativamente simplificado.

**Integración con el resto de herramientas** Hay que tener en cuenta que se establecerá no una, sino un conjunto de herramientas que pueden necesitar interactuar entre sí, por lo que hay que escoger una selección de aquellas que trabajen bien entre ellas.


## Elección runtime

A la hora de establecer la toolchain, se comienza por determinar cual será el entorno de ejecución de nuestra aplicación. Entre los entornos más conocidos para TypeScript encontramos:

-Node.js: Aunque fue diseñado para JavaScript, admite TypeScript de forma nativa, es muy utilizado en aplicaciones del lado del servidor y es ampliamente conocido.

-Deno: Parte de la misma base que Node.js, pero tiene algunas características que lo diferencian como los módulos de seguridad, la gestión de dependencias mediantes URLs, y la compatibilidad con TypeScript de forma nativa.

-Electron: Está dirigido a las aplicaciones multiplataforma con tecnologías web.

-React: Dirigido a aplicaciones móviles.

-Otros entornos específicos (IoT, Unity...)

De estas opciones, que son las principales disponibles en el mercado actual, se descarta Electron debido a su enfoque a las aplicaciones con tecnologías web, algo que no será necesario en nuestro proyecto. React, aunque muy extendido, está diseñado para entornos móviles. Otras herramientas como Unity permiten la ejecución de código TypeScript pero son demasiado específicos y dirigidos a un tipo de software que no será el desarollado en este proyecto (videojuegos, animaciones...).

Por tanto, los dos candidatos finales serán Deno y Node.js. Aunque Deno presenta algunas diferencias notables con respecto a Node, como la mayor seguridad y la eliminación de la necesidad de usar un compilador específico como tsc, optaremos por usar Node debido a la simpleza del mismo, algo que queremos en nuestro proyecto, la facilidad de configuración, buen rendimiento e integración con el resto de herramientas que debemos escoger para la toolchain.

## Elección gestor de dependencias

Una vez escogido el runtime de nuestro proyecto, debemos elegir el gestor de dependencias. Entre los pricipales y más usados tenemos:

-NPM (Node Package Manager): Es el gestor de dependencias por defecto de Node.js. Es el más extendido entre la comunidad y tiene muchísimos paquetes públicos como resultado.

-Yarn: Nace como respuesta por parte de Facebook a npm, por lo que sigue siendo compatible con Node.js. 

-PNPM: Es un gestor minimalista centrado en la eficiencia.

-Otros gestores específicos para ecosistemas -como el de Angular, ng-.


Dada nuestra elección de entorno de ejecución (Node), ya contamos con el gestor NPM preinstalado. NPM es el gestor mejor integrado en Node por definición, es medianamente eficiente y será más que suficiente para las dimensiones del proyecto a tratar . Otros gestores como PNPM son interesantes por su enfoque en la eficiencia y reducción de espacio en disco pero no creo que merezca la pena usarlos ya que no se les sacará partido. Además presentan menor integración en la toolchain. Otros gestores como ng no nos servirán ya que requieren de un ecosistema adaptado a ellos.

## Elección task runner

Elegidos el runtime y gestor de dependencias, queda escoger el task runner. De entre los task runners más accesibles y con buena integración con nuestras herramientas tenemos:

-NPM Scripts: El gestor de paquetes NPM tiene la posibilidad de ejecutar scripts personalizados.

-Gulp: Es uno de los más populares, permite automatizar casi cualquier tarea de construcción.

-Grunt: Similar a Gulp pero más simple y más antiguo.

-Webpack: Es un empaquetador de módulos que ofrece la posibilidad de realizar tareas de compilación, minimización etc.


Dada la simpleza de nuestro proyecto, cualquier de los task runners más populares del mercado podrían ser implementados sin dificultad, sin embargo, aprovechando NPM, y maximizando así la integración de las herramientas de nuestra toolchain, usaremos la posibilidad de usar los scripts que definamos a través de NPM. Se usará el compilador de TypeScript tsc para un script que ejecutará NPM y que se definirá en el correspondiente package.json. La facilidad de configuración es notable y la integración con el lenguaje es máxima.

## Comprobación sintaxis

Para ejecutar la tarea que comprueba la sintaxis de nuetro proyecto, ejecutamos en la terminal el comando:

```bash
npm run check
``` 
 