# Clima-react

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#specifications">Specifications</a> •
  <a href="/">Demo</a> •
</p>

<div align="">
   <p>
      <b>WeatherApp</b> es una aplicación web frontend moderna diseñada para proporcionar información meteorológica precisa y en tiempo real. Con una interfaz intuitiva y funcionalidades como la búsqueda de ciudades, gestión de favoritos y autenticación de usuarios.</i>
   </p>
</div>


## Características

- **Buscar Clima:** Permite a los usuarios buscar el clima actual de cualquier ciudad.
- **Favoritos:** Los usuarios pueden agregar ciudades a su lista de favoritos para acceder rápidamente.
- **Autenticación:** Integración con Auth0 para gestionar el inicio de sesión y la sincronización de favoritos en múltiples dispositivos.
- **Configuración de Cuenta:** Los usuarios pueden actualizar su información personal y preferencias.
- **Interfaz Responsiva:** Diseño adaptable para dispositivos móviles y de escritorio.
- **Animaciones y Estilos Modernos:** Utiliza Tailwind CSS para un diseño atractivo y eficiente.


<br>
<hr>


## Tecnologías Utilizadas
- **Frontend:** React, TypeScript
- **Estilos:** Tailwind CSS
- **Autenticación:** Auth0
- **Iconos:** React Icons
- **Gestión de Estado:** Zustand
- **Herramientas:** Vite, ESLint, Prettier


<br>
<hr>

## Instalación
<p>Sigue los pasos a continuación para ejecutar Clima-React localmente en tu máquina.</p>

### Prerrequisitos

- **Node.js:** Asegúrate de tener Node.js instalado. [Descargar Node.js](https://nodejs.org/)
- **npm o Yarn:** Gestiona las dependencias del proyecto.

### Clonar el Repositorio

```bash
git clone https://github.com/nahyoomi/clima-react.git
cd clima-react

| Name | Description |
| ------ | ------ |
| npm install | install all dependencies |
| npm run dev | run server|

## Estructura del proyecto

```
src/
| assets/
|-- components/
|   |-- Register/
|   |   |-- Register.tsx\n
|   |   |-- Register.css
|-- contexts/
|   |-- UserContext/
|   |   |-- UserContext.tsx
|-- hooks/
|   |-- useMediaQuery/
|   |   |-- useMediaQuery.tsx
|-- pages/
|   |-- UserProfile/
|   |   |-- UserProfile.tsx
|   |   |-- UserProfile.css
|   |-- index.js
|-- routes/
|   |-- routes.tsx
|-- utils/
|   |-- some-util/
|   |   |-- someUtil.tsx
|-- services/
|   |-- some-service/
|   |   |-- someService.tsx/
|-- App.tsx
|-- index.tsx
```

### Recomendaciones Adicionales

- **Archivo `.env.example`:**
  - Considera crear un archivo `.env.example` que contenga los nombres de las variables necesarias sin los valores reales. Esto sirve como plantilla para que otros desarrolladores sepan qué variables deben definir.

    ```env
    VITE_AUTH0_DOMAIN=tu-dominio.auth0.com
    VITE_AUTH0_CLIENT_ID=tu-client-id
    VITE_OPENWEATHER_API_KEY=tu-api-key
    ```

- **Agregar [.env](http://_vscodecontentref_/7) al [.gitignore](http://_vscodecontentref_/8):**
  - Asegúrate de que tu archivo [.gitignore](http://_vscodecontentref_/9) incluya [.env](http://_vscodecontentref_/10) para evitar que se suba accidentalmente al repositorio.

    ```gitignore
    # Archivos de entorno
    .env
    ```