import { Link } from "react-router-dom";
import { convertToFlag } from "../utils/helpers";
import WeatherElementsDetail from "./WeatherElementsDetail";

function CityWeatherQuickDetails({ city }) {
  return (
    <Link
      to={`/city/${city.city}`}
      className="px-10 py-5 w-full bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[25%] shadow-md flex flex-col gap-10 items-center lg:flex-row hover:bg-opacity-40"
    >
      <div className="flex gap-2 items-center">
        <div className="group relative">
          <p className="font-medium w-16 text-lg truncate">{city.cityName} |</p>
          <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform -translate-y-16 absolute bg-gray-100 w-max text-slate-700 font-medium p-2 rounded-md">
            {city.cityName}
          </div>
        </div>
        <p>{convertToFlag(city.country)}</p>
        <img
          className="w-16 ml-3"
          src={`https://openweathermap.org/img/wn/${city.todayWeather.icon}@2x.png`}
          alt="e2w"
        />
      </div>
      <div className="flex gap-10">
        <WeatherElementsDetail
          element="Temeprature:"
          description={`${city.todayWeather.temp}°C`}
        />
        <WeatherElementsDetail
          element="Feels like:"
          description={`${city.todayWeather.feels_like}°C`}
        />
        <WeatherElementsDetail
          element="Humidity:"
          description={`${city.todayWeather.humidity}%`}
        />
        <WeatherElementsDetail
          element="Pressure:"
          description={`${city.todayWeather.pressure} hPa`}
        />
      </div>
    </Link>
  );
}

export default CityWeatherQuickDetails;
