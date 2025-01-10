//TODO: weatherData is not defined

import React, { useState } from "react";
import useStore from "../store/useStore";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { fetchWeather, WeatherData } from "../services/weatherService";

const SearchForm: React.FC = () => {
  const [input, setInput] = useState("");
  const setCity = useStore((state) => state.setCity);
  const setWeatherData = useStore((state) => state.setWeatherData);

  const handleSearch = async () => {
    if (!input.trim()) {
      toast.error("Por favor, ingresa una ciudad.");
      return;
    }
    try {
      const weatherData: WeatherData = await fetchWeather(input.trim());
      setCity(weatherData.name);
      setWeatherData(weatherData);
      setInput("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Ocurrió un error inesperado.");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center my-8 px-4">
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          className="w-full text-white pl-4 pr-12 py-2 rounded-full bg-black bg-opacity-30 border border-white  transition duration-200"
          placeholder="El tiempo en..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-600 focus:outline-none"
          aria-label="Buscar"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
