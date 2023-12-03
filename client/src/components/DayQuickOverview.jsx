import { formatDate } from "../utils/helpers";

function DayQuickOverview({ day }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 bg-opacity-20 p-10 rounded-md shadow-md w-72">
      <div className="text-center">
        <img
          className="-translate-y-7"
          src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
          alt=""
        />
        <p className="font-semibold -translate-y-5 text-lg">
          {formatDate(day.date)}
        </p>
      </div>
      <p className="font-semibold text-xl flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        {day.temp}°C
      </p>
    </div>
  );
}

export default DayQuickOverview;
