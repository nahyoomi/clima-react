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
    setCity(input);
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric&lang=es`
      );
      if (!response.ok) {
        throw new Error('Ciudad no encontrada');
      }
      const data = await response.json();
      setWeatherData(data);
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