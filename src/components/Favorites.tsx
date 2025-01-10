import React from "react";
import useStore from "../store/useStore";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchWeather, WeatherData } from "../services/weatherService";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="m-4 w-full max-w-md">
      <h3 className="text-lg text-center text-white font-semibold mb-2">
        Ciudades Favoritas
      </h3>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          Aun no se han agregado favoritos.
        </p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((city) => (
            <li
              key={city}
              className="flex justify-between items-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg text-black p-2 rounded-md"
            >
              <button
                onClick={() => handleFetchWeather(city)}
                className="flex items-center space-x-2 text-black p-2 rounded w-full text-left"
              >
                <FaLocationDot /> <p className="font-bold">{city}</p>
              </button>
              <button
                onClick={() => {
                  removeFavorite(city);
                  toast.success(
                    "La ciudad seleccionada ha sido eliminada correctamente"
                  );
                }}
                className="ml-2 text-red-500 transform transition-transform duration-200 hover:scale-125 focus:scale-125"
              >
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
