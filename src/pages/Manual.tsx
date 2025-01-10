import React from "react";
import { FaSearch, FaStar, FaTrash, FaUser, FaCog } from "react-icons/fa";

const Manual: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl mt-12 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Manual de Usuario</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaSearch className="mr-2" /> Buscar Clima
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Ingresar Ciudad:</strong>
            <p className="ml-4">
              Escribe el nombre de la ciudad en el campo de búsqueda.
            </p>
          </li>
          <li>
            <strong>Ejecutar Búsqueda:</strong>
            <p className="ml-4">
              Haz clic en el botón <span className="font-bold">"Buscar"</span>.
            </p>
          </li>
          <li>
            <strong>Respuesta:</strong>
            <p className="ml-4">
              Se mostrará la información del clima actual de la ciudad
              ingresada.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaStar className="mr-2" /> Agregar a Favoritos
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Agregar Favorito:</strong>
            <p className="ml-4">
              Después de buscar una ciudad, haz clic en el icono de estrella{" "}
              <FaStar className="inline" /> al lado del nombre de la ciudad.
            </p>
          </li>
          <li>
            <strong>Respuesta:</strong>
            <p className="ml-4">
              La ciudad se añadirá a tu lista de favoritos y aparecerá en la
              sección de favoritos.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaTrash className="mr-2" /> Gestionar Favoritos
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Visualizar Favoritos:</strong>
            <p className="ml-4">
              Ve a la sección de <span className="font-bold">"Favoritos"</span>{" "}
              para ver todas las ciudades guardadas.
            </p>
          </li>
          <li>
            <strong>Eliminar Favorito:</strong>
            <p className="ml-4">
              Haz clic en el icono de <span className="font-bold">"×"</span>{" "}
              junto a la ciudad que deseas eliminar.
            </p>
          </li>
          <li>
            <strong>Respuesta:</strong>
            <p className="ml-4">
              La ciudad será eliminada de tus favoritos y recibirás una
              notificación de éxito.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaUser className="mr-2" /> Autenticación de Usuario
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Iniciar Sesión:</strong>
            <p className="ml-4">
              Haz clic en el botón <span className="font-bold">"Login"</span>{" "}
              ubicado en la esquina superior derecha.
            </p>
          </li>
          <li>
            <strong>Completar Autenticación:</strong>
            <p className="ml-4">
              Ingresa tus credenciales de Auth0 para iniciar sesión.
            </p>
          </li>
          <li>
            <strong>Respuesta:</strong>
            <p className="ml-4">
              Accederás a funcionalidades adicionales como sincronizar tus
              favoritos en múltiples dispositivos.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          <FaCog className="mr-2" /> Configuración de la Cuenta
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Acceder a Configuración:</strong>
            <p className="ml-4">
              Haz clic en el icono de usuario <FaUser className="inline" /> en
              la esquina superior derecha y selecciona{" "}
              <span className="font-bold">"Configuración"</span>.
            </p>
          </li>
          <li>
            <strong>Actualizar Información:</strong>
            <p className="ml-4">
              Modifica tu información personal y preferencias según sea
              necesario.
            </p>
          </li>
          <li>
            <strong>Respuesta:</strong>
            <p className="ml-4">
              Tus cambios serán guardados y reflejados en tu cuenta.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Manual;
