import React from 'react';

const Manual: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-4">
      <h1 className="text-2xl font-bold mb-4">Manual de Usuario</h1>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          <strong>Buscar el Clima de una Ciudad:</strong> Ingresa el nombre de la ciudad en el campo de búsqueda y haz clic en el botón "Buscar". La aplicación mostrará el clima actual de la ciudad ingresada.
        </li>
        <li>
          <strong>Agregar a Favoritos:</strong> Una vez que la información del clima se muestre, haz clic en la estrella al lado de la ciudad para agregarla a tu lista de favoritos. Las ciudades favoritas aparecerán en la sección de favoritos para un acceso rápido.
        </li>
        <li>
          <strong>Gestionar Favoritos:</strong> En la sección de favoritos, puedes ver todas las ciudades que has guardado. Para eliminar una ciudad de tus favoritos, haz clic en el icono de "×" junto a la ciudad correspondiente.
        </li>
        <li>
          <strong>Iniciar Sesión:</strong> Para sincronizar tus favoritos en diferentes dispositivos, primero debes iniciar sesión. Haz clic en el botón "Login" y sigue el proceso de autenticación.
        </li>
        <li>
          <strong>Cerrar Sesión:</strong> Si deseas cerrar tu sesión, haz clic en el botón "Logout". Esto desvinculará tu cuenta y eliminará la sincronización de favoritos.
        </li>
        <li>
          <strong>Redirigir al Inicio:</strong> Haciendo clic en el logo de WeatherApp en la barra de navegación, serás redirigido a la página principal de la aplicación.
        </li>
      </ol>
    </div>
  );
};

export default Manual;