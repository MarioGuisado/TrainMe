# Tests

## Criterios a la hora de establecerlos

Para establecer el framework, biblioteca de aserciones, y herramientas CLI de nuestros tests debemos tener en cuenta:

Los frameworks disponibles para nuestro lenguaje, y de estos cuáles presentan un mayor uso según [Stateofjs](https://2022.stateofjs.com/en-US/libraries/testing/)

Cuales son las distintas bibliotecas de aserciones que podemos emplear y cual tiene mejor valoración en [Snyk Advisor](https://snyk.io/advisor)

Se dará prioridad a los candidatos con CLI integrado.

## Candidatos

Para nuestro proyecto se ha definido Node.js como el runtime. Echando un vistazo al panorama actual en nuestro lenguaje, algunas de las herramientas más interesantes que cumplen con nuestros filtros establecidos son:

-Mocha: uno de los frameworks más populares, es considerado muy versátil y cuenta con el apoyo de bibliotecas de aserciones como Chai o Should, con valoraciones de 97 y 61 en [Snyk Advisor](https://snyk.io/advisor). Es actualmente el segundo framework con mayor uso.

-Jasmine: está muy centrado en la sintaxis clara y sencilla, maximizando así el enfoque BDD. Tiene su propia biblioteca de aserciones. Se encuentra en el top 5 de frameworks más usados. Tiene una valoración de 88 junto con su biblioteca.

-Jest: el framework de Facebook y el más usado actualmente, aunque fue diseñado principalmente para aplicaciones basadas en React, también es posible utilizarlo con Node. Además cuenta con su propia biblioteca de aserciones, con una valoracion de 92.

Todos los candidatos considerados cuentan con CLI.

## Elección

Los 3 candidatos considerados son ampliamente usados en el panorama actual de JavaScript y serían válidos para nuestro proyecto. Sin embargo, además del framework es necesario establecer la biblioteca de aserciones. Si atendemos a las valoraciones de [Snyk Advisor](https://snyk.io/advisor) vemos como de todas las consideradas Chai es la que mejor puntuación obtiene. Por tanto usaremos esta biblioteca en combinación con Mocha, uno de los frameworks más usados que no cuenta con su propia biblioteca.

## Desarrollo de los tests

Para desarrollarlos se seguirán los principos F.I.R.S.T. Es decir, los test deben ejecutarse de forma rápida, los resultados no deben depender unos de otros, deben ser iguales independientemente del servidor en el que se ejecuten y deben informar del mismo, sin necesidad de consultar ficheros externos. Además, estos test deberían desarrollarse (idealmente según TDD), antes del propio código, para luego escribir el mismo y validarlos.
