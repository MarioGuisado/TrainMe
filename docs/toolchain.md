
# Toolchain

## Criterios de elección

A continuación, se describen los criterios de elección de las herramientas que se emplearán en la toolchain que estableceremos para este proyecto.


**1 Ventajas técnicas de cada herramienta** Para el proyecto a elaborar, se priorizará aquel software que permita un rendimiento aceptable, principalmente atendiendo tiempo de ejecución. No serán prioritarias las herramientas centradas en otros aspectos técnicos como la seguridad, la escalabilidad o el uso de recursos.

**2 Documentación disponible** Una buena documentación nutre de información accesible y útil para el uso del producto, favorece la resolución de los problemas que puedan aparecer y ayuda a los usuarios a optimizar la implementación y uso de herramientas software escogidas para sus proyectos. Será un factor clave que considerar si queremos desarrollar algo que pueda escalar en el futuro. Cuanta más información -de calidad-, exista de la base sobre la que se asienta nuestro proyecto, menores las probabilidades de acumular errores técnicos y de implementación en el futuro.

**3 Integración con el resto de herramientas** La integración es la facilidad con la que dos herramientas pueden interactuar entre sí. Cuantas menos configuraciones o acciones adicionales por parte del desarrollador se necesiten para que dos herramientas se comuniquen y trabajen bien entre sí, mayor será la integración.


## Elección runtime

A la hora de establecer la toolchain, se comienza por determinar cual será el entorno de ejecución de nuestra aplicación. Entre los entornos más conocidos para TypeScript encontramos:

-Node.js: Aunque fue diseñado para JavaScript, admite TypeScript de forma nativa, es muy utilizado en aplicaciones del lado del servidor y es ampliamente conocido.

-Deno: Parte de la misma base que Node.js, pero tiene algunas características que lo diferencian como los módulos de seguridad, la gestión de dependencias mediantes URLs, y la compatibilidad con TypeScript de forma nativa.

Siguiendo los criterios de selección establecidos:

Tanto Deno como Node presentan aproximadamente el mismo rendimiento, ya que comparten el mismo motor de JavaScript (V8). Si bien Deno es más seguro que Node, este último presenta una mayor y mejor documentación, lo que reduce la probabilidad de complicaciones en el proyecto. Además como veremos má adelante favorecerá la elección del gestor de dependencias, ya que se desarrolla en conjunto con NPM, maximizando la integración de estas dos herramientas.

La elección final será Node.


## Elección gestor de dependencias

Una vez escogido el runtime de nuestro proyecto, debemos elegir el gestor de dependencias. Entre los pricipales y más usados tenemos:

-NPM (Node Package Manager): Es el gestor de dependencias por defecto de Node.js. Es el más extendido entre la comunidad y tiene muchísimos paquetes públicos como resultado.

-Yarn: Nace como respuesta por parte de Facebook a npm, por lo que sigue siendo compatible con Node.js. 

-PNPM: Es un gestor minimalista centrado en la eficiencia.


Siguiendo los criterios de selección establecidos:

Si bien PNPM es un gestor interesante, se encuentra muy centrado en la optimización de los recursos usados, algo que no buscamos en nuestro proyecto, es el que tiene menor integración y menor documentación. Yarn es más seguro que NPM y más rápido y eficiente manejando paquetes, aunque no es compatible con los paquetes de NPM. NPM tiene mayor integración con Node (por definición) y, aunque posee un rendimiento ligeramente menor, se podrían considerar igualados en este aspecto teniendo en cuenta el proyecto en el que trabajamos. Lógicamente, existe más información disponible y más facilidades para su uso y configuración para NPM que para Yarn, al ser el primero más antiguo y desarrollado en conjunto con Node.

La elección final será NPM.

## Elección task runner

Elegidos el runtime y gestor de dependencias, queda escoger el task runner. De entre los task runners más accesibles y con buena integración con nuestras herramientas tenemos:

-NPM Scripts: El gestor de paquetes NPM tiene la posibilidad de ejecutar scripts personalizados.

-Gulp: Es uno de los más populares, permite automatizar casi cualquier tarea de construcción. Está diseñado para crear y automatizar tareas mediante JavaScript.

-Grunt: Similar a Gulp pero más simple y más antiguo. Está diseñado para crear y automatizar tareas mediante archivos JSON.


Siguiendo los criterios de selección establecidos:

Tanto Gulp como Grunt son herramientas más potentes que NPM Scripts y que ofrecen mayores posibilidades como task runners. La primera es más compleja que la segunda, debido a su enfoque en el código, pero usa una sintaxis más sencilla que Grunt. Para las tareas que previsiblemente automatizaremos, cualquiera de los 3 candidatos son igual de válidos y no presentan ventajas con respecto al otro. Tanto Gulp como Grunt necesitan de una instalación y mínima configuración, no así NPM Scripts, que es una funcionalidad añadida al gestor de paquetes que ya hemos seleccionado previamente. La facilidad de uso y simplicidad del mismo, su igual eficiencia con respecto a los otros candidatos, y la gran cantidad de documentación que lo respalda hacen de NPM Scripts el mejor candidato para nuestro task runner.

La elección final será NPM Scripts.

 