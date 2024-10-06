import sunImage from '../assets/sun.png'
import React from 'react'
import { useSearch } from '../contexts/SearchContext'

const WeatherDisplay: React.FC = () => {
  const { weatherData } = useSearch()

  if (!weatherData) {
    return <h1>Error</h1>
  }

  return (
    <div className='weather__info relative'>
      {/* Left Section with Temperature and Info */}
      <div className='weather__text flex flex-col'>
        <p className='mb-2 font-semibold text-gray-700 dark:text-gray-300'>Today's Weather</p>

        <p className='text-8xl font-bold leading-none text-purple-800 dark:text-gray-300'>
          {weatherData.temperature}&deg;
        </p>

        <p className='text-md mb-2 text-gray-700 dark:text-gray-300'>
          <span>H: {weatherData.temperature + 3}&deg;</span> <span>L: {weatherData.temperature - 3}&deg;</span>
        </p>

        <div className='weather_description flex w-full items-center justify-between text-lg text-gray-600 dark:text-gray-300'>
          <div className='text-md font-semibold text-gray-600 dark:text-gray-300'>{weatherData.location}</div>
          <span>{weatherData.date}</span>
          <span>Humidity: {weatherData.humidity}%</span>
          <span>{weatherData.weatherType}</span>
        </div>
      </div>

      {/* Right Section with Sun/Cloud Image */}
      <div className='weather__img absolute -right-[5%] -top-[65%] h-72 w-72'>
        <img src={sunImage} alt='Sun and Clouds' className='h-full w-full object-contain' />
      </div>
    </div>
  )
}

export default WeatherDisplay
