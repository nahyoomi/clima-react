import React from 'react';
import useStore from '../store/useStore';
import { FaStar } from 'react-icons/fa';

const WeatherDisplay: React.FC = () => {
  const weatherData = useStore((state) => state.weatherData);
  const addFavorite = useStore((state) => state.addFavorite);

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
          <p className="text-2xl">{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;