# API REST con TypeScript y NodeJS

## Introducción 
La descripción del problema a resolver es la siguiente:

API REST de moviles que contenga un unico endpoint '/item'. La aplicación es intermediaria entre el cliente y una base de datos, en este caso, MongoDB.

## Despliegue
El despliegue está diseñado para poder desplegarse de dos formas distintas: con docker o con tu propia máquina.


### Con Docker
#### Prerequisitos
- Tener docker y docker-compose instalados.

Ejecutar:
```cmd
> docker-compose up -d --build
```
### Sin Docker
#### Prerequisitos
- Tener Node y NPM instalados.
- Tener una instancia de MongoDB ejecutandose.
  
Creamos el archivo `.env` con las variables de entorno. En este caso, serán necesarias las siguientes:
- *PORT*: Puerto en el que correrá la API.
- *DB_URI*: conexión a mongodb

Ejecutar:
```cmd
> npm i
```
```cmd
> npm run dev
```