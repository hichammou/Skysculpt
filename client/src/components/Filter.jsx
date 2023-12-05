import { useState } from "react";
import FilterItem from "./FilterItem";

function Filter({
  cities,
  search,
  setSearch,
  setIsSorted,
  setFilterByCountry,
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const countries = [...new Set(cities.map((city) => city.country))];

  return (
    <div className="flex flex-col items-end -translate-y-3 mb-3">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-full outline-none border-none bg-slate-300 text-slate-700 font-semibold text-lg pl-4 pr-14 rounded-md"
          />
          <span className="-translate-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 stroke-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div className="space-x-3">
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className="bg-slate-300 p-3 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-slate-700"
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="bg-slate-300 p-3 rounded-lg"
            onClick={() => setIsSorted((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </button>
        </div>
      </div>
      {showTooltip && (
        <ul className="bg-slate-100 mt-1 font-semibold text-slate-800 rounded-lg shadow-md text-sm divide-y-2 max-h-24 relative -left-20 overflow-y-scroll">
          <FilterItem
            onClick={() => {
              setFilterByCountry("all");
              setShowTooltip(false);
            }}
          >
            all
          </FilterItem>

          {countries.map((country) => (
            <FilterItem
              onClick={() => {
                setFilterByCountry(country);
                setShowTooltip(false);
              }}
              key={country}
            >
              {country}
            </FilterItem>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
