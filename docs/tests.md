# Tests

## Criterios a la hora de establecerlos

Para establecer el framework, biblioteca de aserciones, y herramientas CLI de nuestros tests debemos responder a las siguientes preguntas:

¿Cuáles son los frameworks disponibles para nuestro lenguaje?

¿Cuales son las distintas bibliotecas de aserciones que podemos emplear?

¿Se ajusta esta biblioteca a nuestras necesidades? ¿Expresa, a través de un estilo BDD, las pruebas que vamos a realizar con suficiente claridad?

¿Incluyen las herramientas seleccionadas un CLI o debemos determinarlo posteriormente?

## Candidatos

Para nuestro proyecto se ha definido Node.js como el runtime. Echando un vistazo al panorama actual en nuestro lenguaje, algunas de las herramientas más interesantes son:

-Mocha: uno de los frameworks más populares, es considerado muy versátil y cuenta con el apoyo de bibliotecas de aserciones como Chai o Should.

-Jasmine: está muy centrado en la sintaxis clara y sencilla, maximizando así el enfoque BDD. Tiene su propia biblioteca de aserciones.

-Jest: el framework de Facebook, aunque fue diseñado principalmente para aplicaciones basadas en React, también es posible utilizarlo con Node. Además cuenta con su propia biblioteca de aserciones.

Todos los candidatos considerados cuentan con CLI.

## Elección

Aunque todos los candidatos serían válidos y suficientes para establecer nuestros tests, creo que la mejor opción sería el framework Mocha junto con la biblioteca de aserciones Chai. Esta combinación es una de las más populares en proyectos que emplean Node.js y TypeScript, dan una visión realista de como sería un proyecto "serio" y da la oportunidad de aprender a usar herramientas presentes en el actual *state of the art*.
