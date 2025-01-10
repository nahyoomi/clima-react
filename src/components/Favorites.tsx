import React from 'react';
import useStore from '../store/useStore';
import { toast } from 'react-toastify';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchWeather, WeatherData } from '../services/weatherService';

const Favorites: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const favorites = useStore((state) => state.favorites);
  const setCity = useStore((state) => state.setCity);
  const setWeatherData = useStore((state) => state.setWeatherData);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const handleFetchWeather = async (city: string) => {
    try {
      const weatherData: WeatherData = await fetchWeather(city);
      setCity(weatherData.name);
      setWeatherData(weatherData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="mt-4 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-2">Ciudades Favoritas</h3>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Aun no se han agregado favoritos.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((city) => (
            <li key={city} className="flex justify-between items-center">
              <button
                onClick={() => handleFetchWeather(city)}
                className="flex items-center space-x-2 bg-white text-black p-2 rounded w-full text-left"
              >
                <FaSearch /> {city}
              </button>
              <button onClick={() => removeFavorite(city)} className="ml-2 text-red-500">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;