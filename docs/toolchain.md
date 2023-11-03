
# Toolchain

## Criterios de elección

A continuación, se describen los criterios de elección de las herramientas que se emplearán en la toolchain que estableceremos para este proyecto.


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

Siguiendo los criterios de selección establecidos:
    1. Requisitos del proyecto: Para el proyecto que nos concierne, quedan descartados Electron, React o Unity, ya que estan dirigidos a proyectos con un entorno de ejecución distinto del que se tiene pensado (móviles, videojuegos, tecnologías web...). Tanto Node como Deno nos permitirán establecer un runtime apropiado para nuestro proyecto. 
    2. Facilidad de configuración: Aunque Node es realativamente sencillo, es cierto que Deno simplifica mucho la configuración de nuestra toolchain, al implementar las gestiones de dependencias.
    3. Integración con el resto de herramientas: Tanto Deno como Node cuentan con una amplia gama de herramientas para complementarlos y establecer la toolchain de un proyecto. En este aspecto serían equivalentes.

Aunque siguiendo estos criterios Deno parecería ser la primera opción seguida de Node, creo que es interesante usar Node y profundizar en la elección del gestor de dependencias. 

## Elección gestor de dependencias

Una vez escogido el runtime de nuestro proyecto, debemos elegir el gestor de dependencias. Entre los pricipales y más usados tenemos:

-NPM (Node Package Manager): Es el gestor de dependencias por defecto de Node.js. Es el más extendido entre la comunidad y tiene muchísimos paquetes públicos como resultado.

-Yarn: Nace como respuesta por parte de Facebook a npm, por lo que sigue siendo compatible con Node.js. 

-PNPM: Es un gestor minimalista centrado en la eficiencia.

-Otros gestores específicos para ecosistemas -como el de Angular, ng-.

Siguiendo los criterios de selección establecidos:

    1. Requisitos del proyecto: PNPM, aunque minimalista, pretender llevar al extremo la optimización de las dependencias, algo que no será necesario para el proyecto que nos concierne. Yarn es ligeramente más eficiente que NPM pero no le sacaremos partido.
    2. Facilidad de configuración: NPM y Yarn son igual de sencillos de configurar. Por otro lado, PNPM, aunque trata de ser igual de sencillo, se requiere de un pequeño periodo de adaptación para aprender a configurarlo correctamente. En este caso contamos con más experiencia configurando NPM y Yarn por lo que se les dará mayor preferencia con respecto a PNPM.
    3. Integración con el resto de herramientas: De las mencionadas, la herramienta con mayor integración con el runtime elegido es, por definición, NPM. Otras herramientas como ng dependen de su ecosistema propio por lo que quedan descartadas.

La elección final será NPM.

## Elección task runner

Elegidos el runtime y gestor de dependencias, queda escoger el task runner. De entre los task runners más accesibles y con buena integración con nuestras herramientas tenemos:

-NPM Scripts: El gestor de paquetes NPM tiene la posibilidad de ejecutar scripts personalizados.

-Gulp: Es uno de los más populares, permite automatizar casi cualquier tarea de construcción.

-Grunt: Similar a Gulp pero más simple y más antiguo.

-Webpack: Es un empaquetador de módulos que ofrece la posibilidad de realizar tareas de compilación, minimización etc.

Siguiendo los criterios de selección establecidos:
    1. Requisitos del proyecto: Para las tareas que previsiblemente automatizaremos, cualquier task runner será prácticamente equivalente.
    2. Facilidad de configuración: Aunque Grunt es sencillo de configurar, Gulp moderniza y simplifica parte de este proceso. La posibilidad de ejecutar scripts directamente con NPM, y que se use el mismo archivo de configuración que el gestor de dependencias hace que esta sea la opción menos complicada. Webpack es el más complicado y el que más conocimiento requiere de los mencionados.
    3. Integración con el resto de herramientas: Tanto Gulp como Grunt como Webpack requieren de una instalación y una posterior configuración para que trabajen correctamente en nuestra toolchain. NPM es el propio gestor de dependencias que además proporciona el runtime Node por defecto, por lo que la integración es máxima.

La elección final será NPM Scripts.

 