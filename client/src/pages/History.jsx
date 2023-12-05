import axios from "axios";
import { useEffect, useState } from "react";
import CityWeatherQuickDetails from "../components/CityWeatherQuickDetails";
import Filter from "../components/Filter";

function History() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [filterByCountry, setFilterByCountry] = useState("");

  let _cities;

  const sortedCities = isSorted
    ? cities.toSorted((a, b) => a.cityName.localeCompare(b.cityName))
    : cities;

  // if ()

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get("/history");
        if (res.status === 200) {
          setCities(res.data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <Filter
        setIsSorted={setIsSorted}
        cities={cities}
        search={search}
        setSearch={setSearch}
        setFilterByCountry={setFilterByCountry}
      />
      <section className="space-y-5">
        {isLoading && (
          <>
            <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
            <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
            <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
            <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
          </>
        )}
        {filterByCountry && filterByCountry !== "all"
          ? sortedCities
              .filter((city) => city.cityName.includes(search))
              .filter((city) => city.country === filterByCountry)
              .map((city) => (
                <CityWeatherQuickDetails key={city._id} city={city} />
              ))
          : sortedCities.length > 0 &&
            sortedCities
              .filter((city) => city.cityName.includes(search))
              .map((city) => (
                <CityWeatherQuickDetails key={city._id} city={city} />
              ))}
      </section>
    </>
  );
}

export default History;
