import React from 'react';
import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import Favorites from '../components/Favorites';
import { useAuth0 } from '@auth0/auth0-react';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex flex-col items-center">
      <SearchForm />
      {isAuthenticated && <Favorites />}
      <WeatherDisplay />
    </div>
  );
};

export default Home;