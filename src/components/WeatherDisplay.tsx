import React from "react";

interface WeatherDisplayProps {
  weatherData: {
    temperature: number;
    location: string;
    weatherType: string;
    humidity: number;
    date: string;
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  console.log(
    "🚀TCL: - file: WeatherDisplay.tsx:14 - weatherData:",
    weatherData
  );
  return (
    <div className="text-center bg-purple-100 p-6 rounded-md shadow-md mb-4">
      <div className="text-5xl font-bold text-purple-600">
        {weatherData.temperature}°
      </div>
      <div className="text-lg text-gray-600">{weatherData.location}</div>
      <div className="text-sm text-gray-500">Date: {weatherData.date}</div>
      <div className="mt-4 text-sm text-gray-600">
        Humidity: {weatherData.humidity}%
      </div>
      <div className="text-lg text-purple-500">{weatherData.weatherType}</div>
    </div>
  );
};

export default WeatherDisplay;
