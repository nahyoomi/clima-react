import React, { useState } from 'react';
import useStore from '../store/useStore';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

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
      const apiKey = 'e5ca1ee66ee41689483117f19cf0bbc3';

      // Obtener los datos del clima usando la Current Weather Data API
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(input)}&appid=${apiKey}&units=metric&lang=es`
      );

      if (!weatherResponse.ok) {
        const errorData = await weatherResponse.json();
        throw new Error(errorData.message || 'Error al obtener los datos del clima');
      }

      const weatherData = await weatherResponse.json();
      setCity(weatherData.name);
      setWeatherData(weatherData);
    } catch (error: any) {
      toast.error(error.message);
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
      <button
        onClick={handleSearch}
        className="bg-secondary text-white p-2 rounded flex items-center"
      >
        <FaSearch /> Buscar
      </button>
    </div>
  );
};

export default SearchForm;