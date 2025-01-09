export interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number };
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY as string;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al obtener los datos del clima');
  }

  return response.json();
};