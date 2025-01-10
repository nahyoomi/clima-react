import React from 'react';
import useStore from '../store/useStore';
import { FaStar } from 'react-icons/fa';
import useTemperature from '../hooks/useTemperature';
import { useAuth0 } from '@auth0/auth0-react'; // Importar useAuth0
import { toast } from 'react-toastify'; // Importar toast de react-toastify

const WeatherDisplay: React.FC = () => {
  const weatherData = useStore((state) => state.weatherData);
  const addFavorite = useStore((state) => state.addFavorite);
  const { isAuthenticated } = useAuth0(); // Obtener isAuthenticated y login

  // Llamar al hook de manera incondicional con un valor por defecto
  const tempCelsius = weatherData?.main.temp ?? 0;
  const { temperature, unit, toggleUnit } = useTemperature(tempCelsius);

  if (!weatherData) return null;

  const handleAddFavorite = () => {
    if (isAuthenticated) {
      addFavorite(weatherData.name);
      toast.success(`${weatherData.name} ha sido añadido a favoritos`);
    } else {
      toast.info('Por favor, inicia sesión para agregar a favoritos');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded p-4 w-full max-w-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{weatherData.name}</h2>
        <button onClick={handleAddFavorite}>
          <FaStar
            className={`${
              isAuthenticated ? 'text-yellow-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Icono del clima"
        />
        <div>
          <p className="text-2xl">
            {temperature.toFixed(1)}°{unit}
          </p>
          <p className="capitalize">{weatherData.weather[0].description}</p>
        </div>
      </div>
      <button
        onClick={toggleUnit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
      >
        Cambiar a °{unit === 'C' ? 'F' : 'C'}
      </button>
    </div>
  );
};

export default WeatherDisplay;