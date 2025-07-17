# EcommerceCoder

Este proyecto es una tienda online desarrollada como práctica para aprender React y Vite. Permite a los usuarios navegar por un catálogo de productos, ver detalles, agregar productos al carrito, realizar compras y completar un formulario de checkout. Utiliza Firebase como backend para la gestión de productos y órdenes.

## Características

- **Catálogo de productos:** Visualización de productos por categorías.
- **Detalle de producto:** Página individual con información y stock.
- **Carrito de compras:** Agrega, elimina y actualiza productos.
- **Checkout:** Formulario para completar la compra y registrar la orden en Firebase.
- **Ruteo:** Navegación entre páginas usando React Router.
- **Carga de datos:** Integración con Firebase Firestore.
- **Diseño responsivo:** Adaptado para dispositivos móviles y escritorio.

## Estructura del proyecto

- `/src/components`: Componentes reutilizables (NavBar, ItemList, Cart, etc).
- `/src/context`: Contexto global para el manejo del carrito.
- `/src/services`: Servicios para interactuar con Firebase.
- `/public/assets`: Imágenes y recursos estáticos.
- `firebaseConfig.js`: Configuración de Firebase.
- `App.jsx`: Componente principal y configuración de rutas.

## Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [npm](https://www.npmjs.com/) (v9 o superior)
- Una cuenta de [Firebase](https://firebase.google.com/) y un proyecto configurado (opcional si quieres usar tu propio backend)

## Instalación y ejecución local

1. **Clona el repositorio:**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd EcommerceCoder
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase. Ejemplo:

   ```
   VITE_API_KEY=TU_API_KEY
   VITE_AUTH_DOMAIN=TU_AUTH_DOMAIN
   VITE_PROJECT_ID=TU_PROJECT_ID
   VITE_STORAGE_BUCKET=TU_STORAGE_BUCKET
   VITE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
   VITE_APP_ID=TU_APP_ID
   ```

   > **Nota:** No compartas tus credenciales públicas.

4. **Inicia el servidor de desarrollo:**

   ```sh
   npm run dev
   ```

   El proyecto estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

## Scripts útiles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera la versión de producción.
- `npm run preview`: Previsualiza la build de producción.
- `npm run lint`: Ejecuta el linter para revisar el código.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Autor

Giuliano Greco

---

> Proyecto realizado con fines educativos.# EcommerceMejorado
