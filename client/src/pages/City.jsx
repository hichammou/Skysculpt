import { useNavigate, useParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";
import DayQuickOverview from "../components/DayQuickOverview";
import BarChart from "../components/BarChart";
import { useEffect, useRef } from "react";
import axios from "axios";

function City() {
  const { city } = useParams();
  const { cityData, error, isLoading } = useCity(city);
  const countryName = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      if (cityData.country) {
        const req = await axios.get(
          `https://restcountries.com/v3.1/alpha/${cityData.country}`
        );
        countryName.current = req.data[0].name.common;
      }
    })();
  }, [cityData.country, countryName]);

  if (error) navigate("/");

  if (isLoading)
    return (
      <div className="bg-slate-600 backdrop-blur-lg bg-opacity-70 rounded-2xl px-10 py-4 shadow-xl animate-pulse h-[300px] flex gap-10"></div>
    );
  if (cityData.today)
    return (
      <>
        <div className="bg-slate-200 backdrop-blur-lg bg-opacity-70 rounded-2xl px-10 py-4 shadow-xl">
          <div className="flex items-center justify-between gap-10 text-slate-700">
            <div className="flex flex-col items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${cityData.today.icon}@2x.png`}
              />
              <p className="font-bold text-xl -translate-y-5">Today</p>
            </div>

            <div className=" space-y-2">
              <p className="text-2xl font-semibold">{cityData.cityName}</p>
              <p className="text-lg">{countryName.current}</p>
            </div>
            <p className="font-semibold text-2xl ">
              {cityData.today.temp}°C{" "}
              <span className="block font-normal text-lg mt-1">
                Temperature
              </span>
            </p>
            <p className="font-semibold text-2xl ">
              {cityData.today.humidity}%{" "}
              <span className="block font-normal text-lg mt-1">Humidity</span>
            </p>
            <p className="font-semibold text-2xl ">
              {cityData.today.pressure}hPa{" "}
              <span className="block font-normal text-lg mt-1">Pressure</span>
            </p>
          </div>
          <div className="flex gap-5 justify-between">
            {cityData.restOfWeek.map((day) => (
              <DayQuickOverview day={day} key={day.date} />
            ))}
          </div>

          {!isLoading && !error && cityData.today && (
            <BarChart
              days={cityData.days}
              humidities={cityData.humidities}
              temperatures={cityData?.temperatures}
            />
          )}
        </div>
      </>
    );
}

export default City;
