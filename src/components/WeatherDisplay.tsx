import { WeatherData } from '../@types'
import sunImage from '../assets/sun.png'
import React from 'react'

interface WeatherDisplayProps {
  weatherData: WeatherData
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  // return (
  //   <div className='mb-4 rounded-md bg-purple-100 p-6 text-center shadow-md'>
  //     <div className='text-5xl font-bold text-purple-600'>{weatherData.temperature}&deg;</div>
  //     {/* <div className='text-5xl font-bold text-purple-600'>{weatherData.temperature}°</div> */}
  //     <div className='text-lg text-gray-600'>{weatherData.location}</div>
  //     <div className='text-sm text-gray-500'>Date: {weatherData.date}</div>
  //     <div className='mt-4 text-sm text-gray-600'>Humidity: {weatherData.humidity}%</div>
  //     <div className='text-lg text-purple-500'>{weatherData.weatherType}</div>
  //   </div>
  // )

  return (
    <div className='weather__info relative'>
      {/* <div className='relative mx-auto mb-4 flex max-w-md items-center justify-between rounded-3xl bg-purple-100 p-8 text-center shadow-md'> */}
      {/* Left Section with Temperature and Info */}
      <div className='weather__text flex flex-col'>
        <p className='mb-2 font-semibold text-gray-700'>Today's Weather</p>

        <p className='text-8xl font-bold leading-none text-purple-800'>{weatherData.temperature}&deg;</p>

        <p className='text-md mb-2 text-gray-700'>
          <span>H: {weatherData.temperature + 3}&deg;</span> <span>L: {weatherData.temperature - 3}&deg;</span>
        </p>

        <div className='weather_description flex w-full items-center justify-between text-lg text-gray-600'>
          <div className='text-md font-semibold text-gray-600'>{weatherData.location}</div>
          <span>{weatherData.date}</span>
          <span>Humidity: {weatherData.humidity}%</span>
          <span>{weatherData.weatherType}</span>
        </div>
      </div>

      {/* Right Section with Sun/Cloud Image */}
      {/* <div className='weather__img absolute -top-1/3 right-[0%] h-72 w-72'> */}
      <div className='weather__img absolute -right-[5%] -top-[65%] h-72 w-72'>
        <img src={sunImage} alt='Sun and Clouds' className='h-full w-full object-contain' />
      </div>
    </div>
  )
}

export default WeatherDisplay
