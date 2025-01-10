import React from "react";
import SearchForm from "../components/SearchForm";
import WeatherDisplay from "../components/WeatherDisplay";
import Favorites from "../components/Favorites";
import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="p-4 flex flex-col items-center bg-gradient-to-r from-blue-950 to-purple-950 w-full min-h-[87vh]">
      <SearchForm />
      <WeatherDisplay />
      {isAuthenticated && <Favorites />}
    </div>
  );
};

export default Home;
