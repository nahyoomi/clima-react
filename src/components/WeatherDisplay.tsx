import React from 'react';
import useStore from '../store/useStore';
import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaTachometerAlt,
  FaEye,
  FaCloud,
  FaSun,
  FaMoon,
  FaExchangeAlt,
  FaStar
} from 'react-icons/fa';
import { format } from 'date-fns';
import useTemperature from '../hooks/useTemperature';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';

const WeatherDisplay: React.FC = () => {
  const weatherData = useStore((state) => state.weatherData);
  const tempCelsius = weatherData?.main.temp ?? 0;
  const { temperature, unit, toggleUnit } = useTemperature(tempCelsius);
  const addFavorite = useStore((state) => state.addFavorite);
  const { isAuthenticated } = useAuth0();

  if (!weatherData) return null;

  const handleAddFavorite = () => {
    if (isAuthenticated) {
      addFavorite(weatherData.name);
      toast.success(`${weatherData.name} ha sido añadido a favoritos`);
    } else {
      toast.info('Por favor, inicia sesión para agregar a favoritos');
    }
  };

  const {
    name,
    main: { feels_like, pressure, humidity },
    wind: { speed },
    clouds: { all: cloudiness },
    visibility,
    weather,
    sys: { sunrise, sunset, country },
    timezone,
    dt
  } = weatherData;

  const weatherDescription = weather[0].description;
  const weatherIcon = weather[0].icon;

  // Formatear fecha y hora
  const currentDate = format(new Date((dt + timezone) * 1000), 'eeee, MMM d, yyyy');
  const sunriseTime = format(new Date((sunrise + timezone) * 1000), 'hh:mm a');
  const sunsetTime = format(new Date((sunset + timezone) * 1000), 'hh:mm a');

  return (
    <div className="max-w-xl mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-10 mt-8">
      {/* Encabezado */}
      <button onClick={handleAddFavorite}>
          <FaStar
            className={`${
              isAuthenticated ? 'text-yellow-500' : 'text-gray-400'
            }`}
          />
        </button>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">{name}, {country}</h2>
        <p className="text-gray-600">{currentDate}</p>
      </div>

      {/* Clima Actual */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="flex items-center">
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="Icono del clima"
            className="w-24 h-24"
          />
          <div className="ml-4">
            <p className="text-4xl font-semibold">
              {temperature.toFixed(1)}°{unit}
            </p>
            <p className="capitalize text-gray-700">{weatherDescription}</p>
          </div>
        </div>
        <button
          onClick={toggleUnit}
          className="mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none flex items-center"
        >
          <FaExchangeAlt className="mr-2" /> Cambiar a °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>

      {/* Información Adicional */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/* Sensación Térmica */}
        <div className="flex items-center">
          <FaTemperatureHigh className="text-red-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Sensación Térmica</p>
            <p className="font-semibold text-gray-800">{feels_like.toFixed(1)}°{unit}</p>
          </div>
        </div>
        {/* Humedad */}
        <div className="flex items-center">
          <FaTint className="text-blue-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Humedad</p>
            <p className="font-semibold text-gray-800">{humidity}%</p>
          </div>
        </div>
        {/* Velocidad del Viento */}
        <div className="flex items-center">
          <FaWind className="text-green-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Viento</p>
            <p className="font-semibold text-gray-800">{speed} m/s</p>
          </div>
        </div>
        {/* Presión Atmosférica */}
        <div className="flex items-center">
          <FaTachometerAlt className="text-yellow-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Presión</p>
            <p className="font-semibold text-gray-800">{pressure} hPa</p>
          </div>
        </div>
        {/* Visibilidad */}
        <div className="flex items-center">
          <FaEye className="text-purple-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Visibilidad</p>
            <p className="font-semibold text-gray-800">{visibility / 1000} km</p>
          </div>
        </div>
        {/* Cobertura de Nubes */}
        <div className="flex items-center">
          <FaCloud className="text-gray-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Nubes</p>
            <p className="font-semibold text-gray-800">{cloudiness}%</p>
          </div>
        </div>
      </div>

      {/* Amanecer y Atardecer */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {/* Amanecer */}
        <div className="flex items-center">
          <FaSun className="text-orange-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Amanecer</p>
            <p className="font-semibold text-gray-800">{sunriseTime}</p>
          </div>
        </div>
        {/* Atardecer */}
        <div className="flex items-center">
          <FaMoon className="text-purple-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Atardecer</p>
            <p className="font-semibold text-gray-800">{sunsetTime}</p>
          </div>
        </div>
      </div>

      {/* Sección Responsiva para Mobile */}
      <div className="mt-6">
        {/* Aquí puedes agregar más información o secciones adicionales si decides ampliar el servicio de datos */}
      </div>
    </div>
  );
};

export default WeatherDisplay;