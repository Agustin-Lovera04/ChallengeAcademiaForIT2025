# Challenge ingreso a Academia ForIT 2025

Este es un proyecto fullstack básico que incluye un API construida con **Node.js + Express** y un frotend desarrollado con **React + Vite**.

---

## Tecnologías utilizadas

### Backend
- Node.js
- Express
- Cors
- Dotenv

### Frontend
- React
- Vite
- Fetch
- React Router Dom
- Bootstrap

---

## Estructura del proyecto
### backend
  - config/             # Configuraciones (variables de entorno)
  - controllers/        # Controladores con la lógica del API
  - routes/             # Definición de rutas de la API
  - app.js              # Archivo principal del servidor Express
  - .env                # Variables de entorno para backend
  - package.json        # Dependencias y scripts backend
### frontend
  - public/             # Archivos estáticos públicos (index.html)
  - src/
    - assets/         # Recursos estáticos
    - Components/     # Componentes React organizados por funcionalidad
    - Router/         # Configuración de rutas con React Router Dom
    - App.jsx         # Componente raíz de React
    - main.jsx        # Punto de entrada de React
  - .env              # Variables de entorno para frontend
  - package.json      # Dependencias y scripts frontend

---
## Variables de entorno

Para que la aplicación funcione correctamente, es necesario crear los archivos `.env` en ambas carpetas (`backend` y `frontend`).

### Backend (`backend/.env`)
.env
  - CORS_ORIGIN_URL=http://localhost:5173
  - PORT=3000

### Frontend (`backend/.env`)
.env
  - VITE_API_URL=http://localhost:3000/api/tasks

---
## Ejecución local del proyecto
### backend (en terminal)
  - cd .\backend\
  - npm install
  - node .\app.js
### frontend (en terminal)
  - cd .\frontend\
  - npm install
  - npm run dev

---
## Flujo de Funcionalidades

### Listado de Task 
![Listado](https://github.com/Agustin-Lovera04/ChallengeAcademiaForIT2025/blob/e3523157a29f2d75d84ec20d5996ab53df99decb/List.png?raw=true)

### Detalle de Task
![Detalle](https://github.com/Agustin-Lovera04/ChallengeAcademiaForIT2025/blob/65361adfa487d69c53ee9455e7f90938f02979d6/Item.png?raw=true)

### Form Editar Task
![Editar](https://github.com/Agustin-Lovera04/ChallengeAcademiaForIT2025/blob/65361adfa487d69c53ee9455e7f90938f02979d6/Edit.png?raw=true)

### Form Create Task
![Crear](https://github.com/Agustin-Lovera04/ChallengeAcademiaForIT2025/blob/65361adfa487d69c53ee9455e7f90938f02979d6/Create.png?raw=true)

### Eliminación de Task
![Eliminar](https://github.com/Agustin-Lovera04/ChallengeAcademiaForIT2025/blob/65361adfa487d69c53ee9455e7f90938f02979d6/Eliminacion.png?raw=true)

---
## Archivos ignorados

El archivo `.gitignore` incluye:
- node_modules
- .env
---

## Licencia

Este proyecto fue desarrollado como parte del proceso de ingreso a **Academia ForIT 2025**

Creado por [Agustín Lovera](https://github.com/Agustin-Lovera04).

