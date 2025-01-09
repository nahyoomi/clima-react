import React, { useState } from 'react';
import useStore from '../store/useStore';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import { fetchWeather, WeatherData } from '../services/weatherService';

const SearchForm: React.FC = () => {
  const [input, setInput] = useState('');
  const setCity = useStore((state) => state.setCity);
  const setWeatherData = useStore((state) => state.setWeatherData);

  const handleSearch = async () => {
    if (!input) {
      toast.error('Por favor, ingresa una ciudad.');
      return;
    }
    try {
      const weatherData: WeatherData = await fetchWeather(input);
      setCity(weatherData.name);
      setWeatherData(weatherData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocurrió un error inesperado.');
      }
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-64"
        placeholder="Ingresa la ciudad"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch} className="bg-secondary text-white p-2 rounded flex items-center">
        <FaSearch /> Buscar
      </button>
    </div>
  );
};

export default SearchForm;