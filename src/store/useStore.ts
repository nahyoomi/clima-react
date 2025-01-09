import { create } from 'zustand';

interface WeatherState {
  city: string;
  setCity: (city: string) => void;
  weatherData: any;
  setWeatherData: (data: any) => void;
  favorites: string[];
  addFavorite: (city: string) => void;
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
}));

export default useStore;