# Integración Continua

## Criterios de elección de herramientas

Daod que las tareas que vamos a introducir son muy sencillas, los dos principales criterios a la hora de elegir las herramientas serán:

**Integración con GitHub**
Dado que le desarrollo del proyecto se ha llevado en GitHub, el sistema elegido debe poder integrarse con el mismo aunque no tiene por qué ser exclusivo.

**Ejecución en Docker**
Hilando con lo desarrollado en el objetivo anterior, la imagen de docker subida a DockerHub debe poder utilizarse para crear y ejecutar nuestros trabajos


Estos serán los dos principales criterios a seguir, pero se pueden complementar con los análisis, información y votos recogidos en páginas como [Slant](https://www.slant.co/) o [Stackshare](https://stackshare.io/).



## Candidatos

Entre las distintas opciones disponibles, vamos a valorar:

-[GitHub Actions](https://docs.github.com/es/actions). Es el servicio de integración continua proprocionado por el propio GitHub, por lo que está completamente integrado en el repositorio. Los flujos de trabajo son definidos en un fichero YAML. Permite la ejecución sobre contenedores Dockers y tiene un amplio rango de enventos sobre los que se puede activar.

-[CircleCi](https://circleci.com/docs/). Es un servicio de integración que ofrece tanto un plan gratuito como uno de suscripción. Permite la ejecución en contenedores Docker y tiene integración con GitHub, aunque también con [Bitbucket](https://bitbucket.org/) y [GitLab](https://about.gitlab.com/). Se configura mediante un fichero YAML.

-[Semaphore](https://semaphoreci.com/). Al igual que CircleCI presenta una versión gratuita y una de pago. Permite la ejecución en Docker y configuración en YAML. Su principal reclamo es el empleo de parelelismo en sus ejecuciones y la consecuente reducción en los tiempos de construcción de trabajos y ejecuciones.


## Elección

De los mencionados candidatos, y aprovechando que el desarrollo del proyecto (y la asignatura) se apoya fuertemente en el aprendizaje de las herramientas y posibilidades ofrecidas por GitHub, usaremos el sistema de integración propio, GitHub Actions, como primera opción para crear nuestras pruebas sobre el software.

En cuanto a nuestra segunda herramienta, usar CircleCI o Semaphore no suponen en nuestro proyecto una diferencia tangible, pero cuando se trata de un proyecto a mayor escala si hay que compararlos y evaluar sus pros y contras. En [este artículo](https://stackshare.io/stackups/circleci-vs-semaphore) podemos ver un esbozo de el estado actual de las dos tecnologías y lo que opinan los desarrolladores que las emplean. Aunque Semaphore se anuncia como la plataforma más rápida de integración contínua del mercado, CircleCI obtiene muchos más votos en este aspecto, así como el de facilidad en el setup e integración con GitHub (claro que CircleCI tiene más público y por tanto puede recoger más votos). También podemos encontrar un sumario de las características de Semaphore [aquí](https://www.slant.co/options/626/~semaphore-ci-review) y de CircleCI [aquí](https://www.slant.co/options/625/~circleci-review), donde podemos comprobar que salvo en aspectos muy concretos que no nos afectarán, las dos herramientas son muy similares. En general, ambas tecnologías son igualmente viables y no existen motivos de peso para decantarse por una u otra, así que elegiremos CircleCI.

