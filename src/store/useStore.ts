import {create} from 'zustand';

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;

  // Campos adicionales para futuras implementaciones
  uvi?: number;
  hourly?: Array<{
    dt: number;
    temp: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  }>;
  daily?: Array<{
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    uvi: number;
  }>;
  alerts?: Array<{
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
  }>;
}


interface WeatherState {
  city: string;
  setCity: (city: string) => void;
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData) => void;
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
}

const useStore = create<WeatherState>((set) => ({
  city: '',
  setCity: (city) => set(() => ({ city })),
  weatherData: null,
  setWeatherData: (data) => set(() => ({ weatherData: data })),
  favorites: [],
  addFavorite: (city) =>
    set((state) => ({
      favorites: state.favorites.includes(city) ? state.favorites : [...state.favorites, city],
    })),
  removeFavorite: (city) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav !== city),
    })),
}));

export default useStore;