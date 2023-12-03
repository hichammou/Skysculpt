import axios from "axios";
import { useEffect, useState } from "react";
import CityWeatherQuickDetails from "../components/CityWeatherQuickDetails";

function History() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    <section className="space-y-5">
      {isLoading && (
        <>
          <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
          <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
          <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
          <div className="w-full h-[90px] bg-slate-400 bg-opacity-80 backdrop-blur-md animate-pulse rounded-md"></div>
        </>
      )}
      {cities.length > 0 &&
        cities.map((city) => (
          <CityWeatherQuickDetails key={city._id} city={city} />
        ))}
    </section>
  );
}

export default History;
