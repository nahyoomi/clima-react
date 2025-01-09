import {create} from 'zustand';

interface WeatherData {
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number };
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