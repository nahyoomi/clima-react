import React from 'react';
import useStore from '../store/useStore';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

const Favorites: React.FC = () => {
  const favorites = useStore((state) => state.favorites);
  const setCity = useStore((state) => state.setCity);
  const setWeatherData = useStore((state) => state.setWeatherData);

  const fetchWeather = async (city: string) => {
    try {
      const apiKey = 'e5ca1ee66ee41689483117f19cf0bbc3';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener los datos del clima');
      }
      const weatherData = await response.json();
      setCity(weatherData.name);
      setWeatherData(weatherData);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-4 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-2">Ciudades Favoritas</h3>
      <ul className="space-y-2">
        {favorites.map((city) => (
          <li key={city}>
            <button
              onClick={() => fetchWeather(city)}
              className="w-full text-left p-2 bg-secondary text-white rounded flex items-center space-x-2"
            >
              <FaSearch /> {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;