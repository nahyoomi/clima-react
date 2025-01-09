import React from 'react';
import useStore from '../store/useStore';
import { FaStar } from 'react-icons/fa';
import useTemperature from '../hooks/useTemperature'; // Importar el custom hook

const WeatherDisplay: React.FC = () => {
  const weatherData = useStore((state) => state.weatherData);
  const addFavorite = useStore((state) => state.addFavorite);

  // Llamar al hook de manera incondicional con un valor por defecto
  const tempCelsius = weatherData?.main.temp ?? 0;
  const { temperature, unit, toggleUnit } = useTemperature(tempCelsius);

  if (!weatherData) return null;

  return (
    <div className="bg-white shadow-lg rounded p-4 w-full max-w-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{weatherData.name}</h2>
        <button onClick={() => addFavorite(weatherData.name)}>
          <FaStar className="text-yellow-500" />
        </button>
      </div>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Icono del clima"
        />
        <div>
          <p className="text-2xl">{temperature.toFixed(1)}°{unit}</p>
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