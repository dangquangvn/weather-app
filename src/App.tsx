import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import SearchBar from './components/SearchBar'
import SearchHistory from './components/SearchHistory'
import { WeatherData } from './@types'

const WEATHER_MOCK_DATA: WeatherData = {
  temperature: 30,
  temperature_max: 30,
  temperature_min: 30,
  humidity: 47,
  location: 'Hanoi, VN',
  weatherType: 'Clear',
  date: '10-06-2024 11:20am'
}

const HISTORY_MOCK_DATA: WeatherData[] = [
  {
    temperature: 31.71,
    temperature_max: 31.71,
    temperature_min: 31.01,
    humidity: 62,
    location: 'Ho Chi Minh City, VN',
    weatherType: 'Rain',
    date: '10-06-2024 11:40am'
  },
  {
    temperature: 30,
    temperature_max: 30,
    temperature_min: 30,
    humidity: 43,
    location: 'Hanoi, VN',
    weatherType: 'Clear',
    date: '10-06-2024 11:40am'
  },
  {
    temperature: 30,
    temperature_max: 30,
    temperature_min: 30,
    humidity: 43,
    location: 'Hanoi, VN',
    weatherType: 'Clear',
    date: '10-06-2024 11:40am'
  }
]

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(WEATHER_MOCK_DATA)
  console.log('🚀TCL: - file: App.tsx:12 - weatherData:', weatherData)
  const [history, setHistory] = useState<WeatherData[]>(HISTORY_MOCK_DATA)
  console.log('🚀TCL: - file: App.tsx:24 - history:', history)

  const handleSearchSubmit = (data: WeatherData) => {
    setWeatherData(data)
    setHistory([data, ...history])
  }

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
    <div className="min-h-screen w-screen bg-[url('./assets/bg-light.png')] bg-cover bg-center">
      <div className='container mx-auto flex flex-col items-center space-y-20 px-4 pt-4'>
        <div className='w-full max-w-2xl'>
          <SearchBar onSearchSubmit={handleSearchSubmit} />
        </div>
        <div className='relative w-full max-w-2xl rounded-3xl border border-white border-opacity-20 bg-white bg-opacity-10 p-8 shadow-2xl backdrop-blur-md'>
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
          <div className='mt-7'>
            <SearchHistory history={history} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
