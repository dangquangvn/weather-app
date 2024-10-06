import React, { useState } from 'react'
import { fetchWeatherByCity } from '../api/weather.api'
import { WeatherData } from '../@types'

interface SearchBarProps {
  onSearchSubmit: (data: WeatherData) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [city, setCity] = useState('')
  const [inputFocused, setInputFocused] = useState(false)
  const [country, setCountry] = useState('')
  const [error, setError] = useState<string | null>(null)

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
      const weatherData = await fetchWeatherByCity(city)
      console.log('🚀TCL: - file: SearchBar.tsx:31 - weatherData:', weatherData)
      if (weatherData) {
        onSearchSubmit(weatherData)
        setError(null)
      } else {
        setError('City or country not found')
      }
    } catch (err) {
      console.log('🚀TCL: - file: SearchBar.tsx:64 - err', err)
      setError('Error fetching weather data')
    }
  }

  return (
    <div className='flex w-full items-center justify-between space-x-2'>
      {/* Search Input */}
      <div className='relative mr-1 w-full flex-1'>
        <input
          type='text'
          id='city-input'
          value={city}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder=' '
          className={`w-full rounded-2xl border border-transparent bg-white bg-opacity-20 px-4 py-3 text-black outline-none backdrop-blur-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-gray-300 ${
            inputFocused ? 'ring-2 ring-gray-500' : ''
          }`}
        />
        <label
          htmlFor='city-input'
          className={`absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-700 transition-all duration-300 ease-in-out ${
            inputFocused || city ? 'left-4 top-2 text-sm text-gray-500' : ''
          }`}
          style={{ fontSize: inputFocused || city ? '10px' : 'initial' }}
        >
          Country
        </label>
      </div>

      {/* Search Button with Icon */}
      <button
        className='flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 transition duration-300 hover:border-purple-500 hover:bg-purple-700 focus:outline-none active:scale-75'
        // onClick={() => alert(`Searching for weather in: ${city}`)}
        onClick={handleSubmit}
      >
        <span className='icon-[mdi--search] flex-shrink-0 text-2xl text-white'></span>
      </button>
    </div>
  )
}

export default SearchBar
