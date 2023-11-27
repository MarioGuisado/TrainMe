
# Contenedor

## Criterios de elección de la imagen

Para elegir la imagen que emplearemos vamos a seguir los siguientes criterios:

**Sello Docker Official Image**
En DockerHub, las imágenes se pueden encontrar marcadas con hasta 3 sellos distintos: "Docker Official Image", "Verified Publisher" y "Sponsored OSS". De estas distinciones, "Docker Official Image" es la que se otorga a la imagen oficial de DockerHub, por tener una clara documentación, promocionar las buenas prácticas y estar diseñados para los casos de uso más generales y comunes.

**Snyk.io**
Se consultará la información proporcionada por [Snyk.io](https://snyk.io/) que detalla con claridad las diferencias, pros y contras, así como el estado actual de las imágenes.

**Espacio reducido**
Se dará prioridad a aquellas imágenes que ocupen poco espacio, sobre aquellas más generales que exijan multitud de instalaciones y de espacio en disco.


## Elección

Podemos consultar las imágenes oficiales en [DockerHub](https://hub.docker.com/search?q=&image_filter=official), donde encontramos la imagen oficial de Node.js, disponible en distintos "flavors". Si consultamos su [documentacion](https://github.com/nodejs/docker-node/blob/main/README.md#how-to-use-this-image) vemos las diferencias entre cada una de las versiones que se presentan, y usaremos el artículo de [Snyk](https://snyk.io/blog/choosing-the-best-node-js-docker-image/) para elegir la mejor.

-node:version. Es la imagen por defecto. Es la que más ocupa puesto que incluye muchos paquetes comunes que aseguran que funcione para el usuario promedio. Está mantenida por el equipo odifical de Node.js Docker.

-node:alpine. La versión de tamaño reducido. Reduce enormemente el tamaño del contenedor pero a cambio se tendrán que instalar manualmente todos los paquetes y herramientas necesarias para nuestro poyecto. No está soportado por el equipo odifical de Node.js Docker. Existen varios bugs registrados hasta el día de hoy ya que hace uso de musl en lugat de glibc y puede generar crasheos por incompatibilidad.

-node:buster | bullseye | bookworm. Son las versiones basadas en Debian 10, 11 y actual. Dado que los dos primeros se basan en versiones que se encuentran en su última fase de vida, solo consideraremos bookworm.

-node: (variante)-slim. Existe un "tag" slim, para reducir el espacio de cualquier versión deseada y simplificarla para crear únicamente un entorno Node.js funcional.

Viendo las opciones de las que disponemos, buster y bullseye quedaría descartados porque próximamente dejarán de ser mantenidos. Alpine, aunque llama mucho la atención por su tamaño, corre el riesgo de generar bugs y no está mantenida oficialmente. 
Quedan entonces bookworm y la versión predeterminada. Usaremos la recomendada por el artículo anteriormente mencionado, en su versión slim: bookworm-slim. 
