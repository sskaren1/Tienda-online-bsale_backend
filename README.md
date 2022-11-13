# [Bsale Store - Backend](https://sk1-bsale-store.netlify.app/)
[![Bsale Store](https://i.ibb.co/6skpBmh/bsale-store-frontend.png)](https://sk1-bsale-store.netlify.app/)

# 📝 Descripción 📝
Este proyecto consiste de un Api Rest que consume una base de datos MYSQL ya subida a un servidor. 
Fue realizado con:
- Node
- Express
- Sequelize
- CORS

# Base de datos
- Tipo: MYSQL
- Tablas:
  - product
    - id: Identificador único del producto (int)
    - name: Nombre del producto (varchar)
    - url_image: URL de la imagen asociada al producto (varchar)
    - price: Precio de venta del producto (float)
    - discount: Porcentaje de descuento del producto (int)
    - category: Identificador de la categoría (int) 
  - category 
    - id: Identificador único de la categoría (int)
    - name: Nombre de la categoría (varchar)

# 📝 Endpoints 📝
- **Obtener Productos**
Obtiene todos los productos de la base de datos.
https://sk1-bsale-store-backend-production.up.railway.app/api/products
- **Buscar Productos**
Obtiene la data de los productos por el nombre del producto buscado en el parámetro.
https://sk1-bsale-store-backend-production.up.railway.app/api/products/:name
- **Filtrar productos por Categorias**
Obtiene la data de los productos por la categoria elegida pasada en el parámetro.
https://sk1-bsale-store-backend-production.up.railway.app/api/products/filter/categories/:nameCategory
- **Ordenar productos**
Obtiene la data de los productos ordenados según los parámetros pasados.
    - :type = ["asc", "desc"]
    - :property = ["name", "price"]
https://sk1-bsale-store-backend-production.up.railway.app/api/products/sort/:type/:property
- **Obtener Categorias**
Obtiene todos las categorías de la base de datos.
https://sk1-bsale-store-backend-production.up.railway.app/api/categories

# 💻 Instalación 💻
- Ingresar a la terminal de comandos o git bash y ejecutar
    ```
    git clone https://github.com/sskaren1/Tienda-online-bsale_backend.git
    ```
- Ir a la carpeta del proyecto clonado
    ```
    cd Tienda-online-bsale_backend
    ```
- Instalar las despendencias del proyecto
    ```
    npm install
    ```
- Arrancar el servidor 
    ```
    npm run dev
    ```
  
# 🌎 URL 🌎
- https://sk1-bsale-store-backend-production.up.railway.app

# 👾 Redes Sociales 👾
[LinkedIn](https://www.linkedin.com/in/karen-obispo-campos/) | [Github](https://github.com/sskaren1) | [Web Personal](https://karen-obispo.vercel.app/)