# DEVF Kata JavaScript Avanzado Proyecto "Api en Express"

## Contenido

1. [Descripción](#descripcion)
2. [Previa](#previa)
3. [Metodos](#metodos)
4. [Get](#get)
5. [Post](#post)
6. [Put](#put)
7. [Delete](#delete)
8. [Previews](#previews)

### Descripcion
Creamos una API REST usando Node.js, el framework web Express y el sistema gestor de bases de datos MySQL, la cual cuenta con dos "Entidades" o mejor conocidas como tablas (books y videos) para poder realizar peticiones con los métodos HTTP: GET, POST, PUT y DELETE. Realizamos la  prueba de funcionamiento utilizando un cliente REST en Postman ademas de un despliegue en 'Heroku'.

### Tecnologias utilizadas:
<img src="https://img.shields.io/badge/JavaScript-fbe257?style=for-the-badge&logo=javascript&logoColor=black"> 

### Previa
Para instalar los paquetes de Node.js necesarios (indicados en package.json):

- ```npm i```

Crea y asigna tus variables de entorno dentro del archivo .env (en la raíz del proyecto):

- ```HOST=host```

- ```DATABASE=database```

- ```USER=user```

- ```PASSWORD=password```

<hr/>

## Metodos
Demostracion de cada una de las peticiones para probar en Postman (localhost y heroku) o en el navegador como localhost y en dashboard de heroku.

### GET
Para obtener todos los libros disponibles usamos:
- **GET** https://sheltered-garden-91067.herokuapp.com/api/books/
- **GET** http://localhost:4000/api/books/

Para obtener todos los videos disponibles usamos:
- **GET** https://sheltered-garden-91067.herokuapp.com/api/videos/
- **GET** http://localhost:4000/api/videos/

Si desea encontrar la información un libro en especifico solo agregamos el **ID** en la petición:
- **GET** https://sheltered-garden-91067.herokuapp.com/api/books/(ID)
- **GET** http://localhost:4000/api/books/(ID)

Si desea encontrar la información un video en especifico solo agregamos el **ID** en la petición:
- **GET** https://sheltered-garden-91067.herokuapp.com/api/videos/(ID)
- **GET** http://localhost:4000/api/videos/(ID)

### POST
Podemos agregar un nuevo libro con la petición de **POST**, solo asegurese de llenar todos los datos solicitados correctamente:

1. title: titulo del libro.
2. total_pages (numero entero): número de paginas del libro.
3. author: Autor del libro.
4. nationality: nacionalidad del autor.
5. language: lenguaje en que fue escrito el libro.
6. cover_url: enlace de la portada del libro.
7. editorial: nombre de la editorial que publico el libro.

Es necesario que la informacion este en formato JSON, ejemplo:
```json
{  
        "title": "ejemplo libro 2",
        "total_pages": 1000,
        "author": "ejemplo autor 2",
        "nationality": "mexicana",
        "language": "español",
        "cover_url": "www.libro2.com.mx/book.pdf",
        "editorial": "ejemplo editorial2"
    
}
```
- **POST** https://sheltered-garden-91067.herokuapp.com/api/books/
- **POST** http://localhost:4000/api/books/

Podemos agregar un nuevo video con la petición de **POST**, solo asegurese de llenar todos los datos solicitados correctamente:

1. id ( numero entero unico e irrepetible): Identificador unico para el video dentro de la Base de Datos.
2. video_name: nombre del video.
3. url: enlace o ubicación del video.
4. duration (string con formato “00.00.00” ): Tiempo que dura la reproduccion del video.
5. views_number(decimal): Total de vistas que tiene el video.
6. video_type: Clasificacion del video segun su contenido.

Es necesario que la informacion este en formato JSON, ejemplo:
```json
{  
    "id": 4,
    "video_name": "sample3",
    "url": "sample url3",
    "duration": "15:30",
    "views_number": 15,
    "video_type": "mp4"
    
}
```
- **POST** https://sheltered-garden-91067.herokuapp.com/api/videos/
- **POST** http://localhost:4000/api/videos/

### PUT
Si desea editar la información de algun libro ya publicado utilice la petición **PUT**. Debera incluir el **ID** unico del libro y la información a editar.
Ejemplo formato JSON para editar informacion:
```json
{
    "total_pages": 1000,
}
```
- **PUT** https://sheltered-garden-91067.herokuapp.com/api/books/(ID)
- **PUT** http://localhost:4000/api/books/(ID)

Si desea editar la información de algun video ya publicado utilice la petición **PUT**. Debera incluir el **ID** unico del video y la información a editar.
Ejemplo formato JSON para editar informacion:
```json
{
    "views_number": 15,
}
```
- **PUT** https://sheltered-garden-91067.herokuapp.com/api/videos/(ID)
- **PUT** http://localhost:4000/api/videos/(ID)

### DEL
Para eliminar por completo un LIBRO basta con utilizar la petición **PUT**, especificando el **ID** del libro a eliminar.
- **DELETE** https://sheltered-garden-91067.herokuapp.com/api/books/(ID)
- **DELETE** http://localhost:4000/api/books/(ID)

Para eliminar por completo un video basta con utilizar la petición **PUT**, especificando el **ID** del video a eliminar.
- **DELETE** https://sheltered-garden-91067.herokuapp.com/api/videos/(ID)
- **DELETE** http://localhost:4000/api/videos/(ID)

### Previews
- Peticion Get dashbord Heroku (Navegador)
![](./Preview/Preview1.jpg)
![](./Preview/Preview2.jpg)
![](./Preview/Preview3.jpg)
- Peticiones importadas Postman 
[Importacion](./assets/Proyect-Mod4-jsAvanzado.postman_collection.json)
