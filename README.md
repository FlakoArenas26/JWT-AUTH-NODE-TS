# JWT Auth API

## Descripción:

La API JWT-Auth es un sistema de autenticación basado en JSON Web Tokens (JWT) que proporciona funcionalidades de registro, inicio de sesión, autenticación de usuarios y gestión de tokens de acceso.

### Características principales:
- **Registro de usuarios:** Permite a los usuarios registrarse en el sistema proporcionando su nombre, correo electrónico y contraseña.
- **Inicio de sesión:** Permite a los usuarios iniciar sesión en el sistema utilizando sus credenciales de correo electrónico y contraseña.
- **Autenticación de usuarios:** Proporciona una ruta segura para obtener la información del usuario autenticado.
- **Refresco de tokens:** Ofrece una forma de refrescar el token de acceso para prolongar la sesión del usuario.
- **Gestión de sesiones:** Permite a los usuarios cerrar sesión y eliminar sus tokens de acceso.

### Tecnologías utilizadas:
- Node.js
- Express
- TypeORM
- bcryptjs
- jsonwebtoken
- cors
- cookie-parser
- MySQL2
- TypeScript

Esta API proporciona una base sólida para implementar un sistema de autenticación seguro y escalable en aplicaciones web y móviles.

## Requisitos previos:

Antes de comenzar a utilizar esta API, asegúrate de tener instalado en tu sistema lo siguiente:
- Node.js
- TypeScript
- Gestor de paquetes npm
- Base de datos compatible con TypeORM (por ejemplo, MySQL, PostgreSQL, etc.)

## Instalación:

- Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/FlakoArenas26/JWT-AUTH-NODE-TS.git

- Navega hasta el directorio de tu proyecto:
    ```bash
    cd JWT-AUTH-NODE-TS

- Instala las dependencias utilizando npm:
    ```bash
    npm install

## Uso:

- Para iniciar el servidor, ejecuta el siguiente comando:
    ```bash
    npm run start

Esto iniciará el servidor y tu API estará disponible en la dirección y puerto especificados.

## Rutas Disponibles:

- POST /api/register: Registra un nuevo usuario.
- POST /api/login: Inicia sesión con las credenciales proporcionadas.
- GET /api/user: Obtiene la información del usuario autenticado.
- POST /api/refresh: Refresca el token de acceso.
- GET /api/refresh: Cierra sesión y elimina los tokens de acceso.

Para utilizar estas rutas, asegúrate de enviar los datos necesarios en el cuerpo de la solicitud según la especificación de cada ruta.

## Contribución:

Si deseas contribuir a este proyecto, sigue estos pasos:
- Haz un fork de este repositorio.
- Crea una nueva rama para tu función o corrección de errores (`git checkout -b feature/nueva-funcion`).
- Haz tus cambios y haz commit (`git commit -am 'Añadir nueva función'`).
- Haz push a la rama (`git push origin feature/nueva-funcion`).
- Crea un nuevo pull request y describe tus cambios detalladamente.

## Licencia:

- Este proyecto está bajo la Licencia ISC.
