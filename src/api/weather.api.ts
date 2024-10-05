import axios from "axios";
import { CONFIG } from "../config";
import { WeatherData } from "../@types";

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    // const response = await axios.get(`${API_URL}?city=${city}`);
    const response = await axios.get(CONFIG.WEAHTER_API_URL, {
      params: {
        q: city,
        appid: CONFIG.WEATHER_API_KEY,
        units: "metric",
      },
    });

    console.log("🚀TCL: - file: weather.api.ts:30 - response:", response);
    // const data = response.data[0];
    const data = response.data;
    if (data) {
      return {
        temperature: data.temperature,
        location: `${data.city}, ${data.country}`,
        weatherType: data.weatherType,
        humidity: data.humidity,
        date: new Date(data.date).toLocaleString(),
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching weather data", error);
    throw new Error("Failed to fetch weather data");
  }
};
