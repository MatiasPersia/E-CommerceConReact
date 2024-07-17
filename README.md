# E V O T E C H  e-commerce

## Descripción del Proyecto

EVOTECH es una plataforma de comercio electrónico diseñada para ofrecer una experiencia de compra en línea fluida y eficiente. Nuestro objetivo es proporcionar a los usuarios una amplia gama de productos tecnológicos de alta calidad, con una interfaz intuitiva y fácil de usar. La plataforma permite a los usuarios navegar por diferentes categorías de productos, ver detalles específicos de cada artículo, agregar productos a su carrito y realizar compras de manera segura (proximamente).

## Stack Usado

- **Frontend**:
  - React: Biblioteca de JavaScript para construir interfaces de usuario.
  - React Router: Biblioteca para manejar la navegación en una aplicación de una sola página (SPA).
  - CSS: Para el diseño y la presentación visual.

- **Backend**:
  - Node.js: Entorno de ejecución para JavaScript en el servidor.
  - Express: Framework para construir aplicaciones web y APIs.
  - MongoDB: Base de datos NoSQL para almacenar información de productos y usuarios.

- **Herramientas y Librerías Adicionales**:
  - Axios: Cliente HTTP para realizar solicitudes a la API.
  - Vite: Herramienta de construcción rápida para proyectos de frontend.
  - Google Maps API: Para mostrar la ubicación de la tienda en la página de contacto.

## Uso/Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/evotech-ecommerce.git
   cd evotech-ecommerce

2. Instala las dependencias del proyecto:
npm install


3. Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:
  REACT_APP_API_URL=http://localhost:5000/api
  REACT_APP_GOOGLE_MAPS_API_KEY=TU_API_KEY

4.Inicia el servidor de desarrollo:
npm start


5. Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

#BACKEND
Para el backend, asegúrate de tener Node.js y MongoDB instalados. Luego, sigue estos pasos:

1.Clona el repositorio del backend (si está separado):
git clone https://github.com/tu-usuario/evotech-backend.git
cd evotech-backend

2.Instala las dependencias del backend:
npm install


3.Configura las variables de entorno para el backend: Crea un archivo .env en la raíz del proyecto backend y añade las siguientes variables:
MONGO_URI=mongodb://localhost:27017/evotech
PORT=5000

4.Inicia el servidor del backend:
npm start


Con estos pasos, deberías tener tanto el frontend como el backend de tu aplicación de e-commerce en funcionamiento. Si tienes alguna pregunta o necesitas más ayuda, ¡no dudes en contactarme!
