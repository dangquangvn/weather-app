import React, { useState } from "react";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { fetchWeatherByCity } from "../api/weather.api";
import { WeatherData } from "../@types";

interface SearchBarProps {
  onSearchSubmit: (data: WeatherData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [city, setCity] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [country, setCountry] = useState("");
  const [error, setError] = useState<string | null>(null);

  //   const handleSubmit = () => {
  //     const mockWeatherData = {
  //       temperature: 26,
  //       location: `${city}, MY`,
  //       weatherType: "Cloudy",
  //       humidity: 58,
  //       date: new Date().toLocaleString(),
  //     };
  //     onSearchSubmit(mockWeatherData);
  //   };

  const handleSubmit = async () => {
    try {
      //   const weatherData = await fetchWeatherByCity(city, country);
      const weatherData = await fetchWeatherByCity(city);
      if (weatherData) {
        onSearchSubmit(weatherData);
        setError(null);
      } else {
        setError("City or country not found");
      }
    } catch (err) {
      console.log("🚀TCL: - file: SearchBar.tsx:64 - err", err);
      setError("Error fetching weather data");
    }
  };

  //   return (
  //     <div className="flex items-center justify-between mb-4">
  //       <input
  //         type="text"
  //         placeholder="Enter city"
  //         className="w-full px-4 py-2 border rounded-md shadow-md"
  //         value={city}
  //         onChange={(e) => setCity(e.target.value)}
  //       />
  //       <button
  //         className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow-md"
  //         onClick={handleSubmit}
  //       >
  //         Search
  //       </button>
  //     </div>
  //   );
  // return (
  //   // <div className="bg-purple-200 flex items-center justify-center h-screen">
  //   <div className="relative w-full max-w-sm">
  //     {/* Search Input */}
  //     <input
  //       type="text"
  //       id="city-input"
  //       value={city}
  //       onFocus={() => setInputFocused(true)}
  //       onBlur={() => setInputFocused(false)}
  //       onChange={(e) => setCity(e.target.value)}
  //       placeholder=" "
  //       className={`w-full py-3 px-4 border rounded-lg outline-none transition-all duration-300 ease-in-out
  //         ${inputFocused ? "border-blue-500" : "border-gray-300"}`}
  //     />
  //     <label
  //       htmlFor="city-input"
  //       className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out
  //         ${inputFocused || city ? "text-blue-500 top-[-0.5rem] text-sm" : ""}`}
  //     >
  //       Country
  //     </label>

  //     {/* Search Icon */}
  //     <span className="absolute right-4 top-3 cursor-pointer hover:animate-pulse">
  //       <SearchIcon className="h-6 w-6 text-gray-500" />
  //     </span>
  //   </div>
  //   // </div>
  // );

  return (
    <div className="flex items-center space-x-2">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          id="city-input"
          value={city}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onChange={(e) => setCity(e.target.value)}
          placeholder=" "
          className={`w-full py-3 px-4 border rounded-2xl outline-none transition-all duration-300 ease-in-out 
            ${inputFocused ? "border-blue-500" : "border-gray-300"}`}
        />
        <label
          htmlFor="city-input"
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out
            ${inputFocused || city ? "text-blue-500 top-[-0.5rem] text-sm" : ""}`}
        >
          Country
        </label>
      </div>

      {/* Search Button with Icon */}
      <button
        className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-colors duration-300 focus:outline-none"
        onClick={() => alert(`Searching for weather in: ${city}`)}
      >
        <span className="icon-[mdi--search] text-white text-2xl flex-shrink-0"></span>
      </button>
    </div>
  );
};

export default SearchBar;
