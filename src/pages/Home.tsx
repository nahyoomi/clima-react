import Favorites from "../components/Favorites";
import SearchForm from "../components/SearchForm";
import WeatherDisplay from "../components/WeatherDisplay";


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
        <SearchForm />
        <WeatherDisplay />
        <Favorites />
    </div>
  );
};

export default Home;