import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import { WeatherData } from "./@types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<WeatherData[]>([]);

  const handleSearchSubmit = (data: WeatherData) => {
    setWeatherData(data);
    setHistory([data, ...history]);
  };

  // return (
  //   <div className="min-h-screen bg-purple-200 p-6">
  //     <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
  //       <SearchBar onSearchSubmit={handleSearchSubmit} />
  //       {weatherData && <WeatherDisplay weatherData={weatherData} />}
  //       <SearchHistory history={history} />
  //     </div>
  //   </div>
  // );
  return (
    // <div className="min-h-screen flex items-center justify-center bg-purple-300">
    <div className="min-h-screen w-screen flex items-center justify-center flex-col bg-[url('./assets/bg-light.png')] bg-center bg-cover">
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white border-opacity-20">
        {/* <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"> */}
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
        <SearchHistory history={history} />
        <span className="icon-[mdi--search] h-6 w-6 text-white"></span>
      </div>
    </div>
  );
}

export default App;
