import axios from "axios";
import { useEffect, useState } from "react";

export function useCity(city) {
  const [cityData, setCityData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(`/get-city/${city}`);
        setCityData(res.data);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [city]);
  return { cityData, isLoading, error };
}
