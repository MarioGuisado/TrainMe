
# Configuración repositorio

**Claves pública privada**

Se crearán primeramente un par de claves pública/privada, siguiendo el propio tutorial que ofrece GitHub:

```
$ ssh-keygen -t ed25519 -C "granadamariogg@gmail.com"
```

Se añade la clave pública desde el propio GitHub.

**Configurando Git**

Necesitaremos vincular nuestro usuario y correo para poder usar Git correctamente, y trabajar con nuestro perfil.
```
$ git config user.email "granadamariogg@gmail.com"
$ git config user.name "MarioGuisado"
```
**Configurando perfil GitHub**
Finalmente, y con objeto de facilitar la  identificación de los autores del repositorio, se ha modificado el perfil de GitHub tal y como se describe en el fichero correspondiente al objetivo 0, de forma que se ha incluído una foto, nombre completo, ciudad y universidad al mismo.
