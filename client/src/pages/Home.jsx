import axios from "axios";
import { useState } from "react";
import CityWeatherQuickDetails from "../components/CityWeatherQuickDetails";
import Error from "../components/Error";
import Loader from "../components/Loader";
// import { Link } from "react-router-dom";
// import { convertToFlag } from "../utils/helpers";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState({});

  async function handleSearch(e) {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.get("/cities", {
        params: {
          q: searchQuery,
        },
      });

      console.log("helel", res);

      if (res.status === 200) {
        setCity(res.data);
      }
      setSearchQuery("");
    } catch (e) {
      console.error(e.message);
      setCity({});
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex gap-10 flex-col items-center translate-y-28">
      <div className="head_text text-center">
        <h1>
          Search & Visualize
          <p className="orange_gradient">Start by typing a city name</p>
        </h1>
      </div>
      <form method="get" className="w-5/6" onSubmit={handleSearch}>
        <input
          type="text"
          name="q"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a city"
          className="search_input"
          autoComplete="off"
        />
      </form>
      {error && <Error>We could not find the city you are looking for</Error>}
      {/* {isLoading && <LoadingIcons.Grid fill="#06b6d4" className="mt-10" />} */}
      {isLoading && <Loader />}
      {!isLoading && city.city && <CityWeatherQuickDetails city={city} />}
    </section>
  );
}

export default Home;
