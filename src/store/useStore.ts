import {create} from 'zustand';
import { WeatherState } from '../types/weather';


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