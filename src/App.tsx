import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import SearchBar from './components/SearchBar'
import SearchHistory from './components/SearchHistory'
import { WeatherData } from './@types'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useSearch } from './contexts/SearchContext'

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
  return (
    <div className="relative min-h-screen w-screen bg-[url('./assets/bg-light.png')] bg-cover bg-center dark:bg-[url('./assets/bg-dark.png')]">
      <div className='container mx-auto flex min-h-screen flex-col items-center space-y-20 px-4 pt-4'>
        <div className='w-full max-w-2xl'>
          <SearchBar />
        </div>
        <div className='relative w-full max-w-2xl rounded-3xl border border-white border-opacity-20 bg-white bg-opacity-10 p-8 shadow-2xl backdrop-blur-md dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-40 dark:shadow-2xl'>
          <WeatherDisplay />
          <div className='mt-7'>
            <SearchHistory />
          </div>
        </div>
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default App
