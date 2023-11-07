
# Toolchain

## Elección runtime

A la hora de establecer la toolchain, se comienza por determinar cual será el entorno de ejecución de nuestra aplicación.

Para nuestro proyecto emplearemos Node.js


## Elección gestor de dependencias

Una vez escogido el runtime de nuestro proyecto, debemos elegir el gestor de dependencias. Entre los pricipales y más usados tenemos:

-NPM (Node Package Manager): Es el gestor de dependencias por defecto de Node.js. Es el más extendido entre la comunidad y tiene muchísimos paquetes públicos como resultado.

-Yarn: Nace como respuesta por parte de Facebook a npm, por lo que sigue siendo compatible con Node.js. 

-PNPM: Es un gestor minimalista centrado en la eficiencia.

**Elección del gestor de dependecias**

Para el proyecto que se está desarrollando, y las dimensiones y requisitos que prevee alcanzar, cualquier gestor de los nombrados es correcto y brindaría la funcionalidad que se requiere. La superioridad en algunos aspectos técnicos de Yarn como los algoritmos de resolución de dependencias empleados, el uso de lockfiles para garantizar compatibilidad o la capacidad de realizar operaciones en paralelo será algo de lo que no obtendremos ventaja significativa para nuestro proyecto. Mismo caso para las ventajas de gestión de recursos que ofrece PNPM. Cabe destacar que dejando aspectos técnicos a un lado, según *snyk Advisor*, PNPM cuenta con mayor mantenimiento y mejor puntuación que Yarn, y se encuentra igualado con NPM.
Por tanto, ante un "empate técnico", en el que todos los gestores son igual de válidos, se optará por la elección más sencilla y directa, usar el propio gestor por defecto de Node, ahorrándonos así instalaciones y configuraciones adicionales.

La elección final será NPM.

## Elección task runner

Elegidos el runtime y gestor de dependencias, queda escoger el task runner. De entre los task runners disponibles valoraremos:

-NPM Scripts: El gestor de paquetes NPM tiene la posibilidad de ejecutar scripts personalizados.

-Gulp: Es uno de los más populares, permite automatizar casi cualquier tarea de construcción. Está diseñado para crear y automatizar tareas mediante JavaScript.

-Grunt: Similar a Gulp pero más simple y más antiguo. Está diseñado para crear y automatizar tareas mediante archivos JSON.


**Elección del task runner**

Tanto Gulp como Grunt son herramientas más potentes que NPM Scripts y que ofrecen mayores posibilidades como task runners, pero para el proyecto que nos concierne, todas nos servirán por igual y producirán el mismo resultado y rendimiento.
Si revisamos las puntuaciones ofrecidas por *snyk Advisor* para estas herramientas, vemos que se le da un 76/100 a Gulp, 85/100 a Grunt y 95/100 a NPM (hay que tener en cuenta que para el último caso se evalúa el gestor NPM al completo). Las directrices que se siguen para dar esta puntuación son el nivel de seguridad, popularidad y mantenimiento. Si bien la popularidad es un factor que no vamos a tener en cuenta, el mantenimiento será algo a valorar ya que una herramienta que se quede obsoleta producirá deudas técnicas a lo largo y ancho de nuestro proyecto. En este aspecto, NPM Script es superior a Gulp y Grunt. Además, contaremos con la ventaja de haber elegido NPM como gestor de dependencias lo que incluye NPM Scripts, y nos simplifacará el proceso de establecimiento de la toolchain.

La elección final será NPM Scripts.

 