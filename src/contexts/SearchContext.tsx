import React, { createContext, useContext, useState } from 'react'
import { WeatherData } from '../@types'
import { fetchWeatherByCity } from '../api/weather.api'

interface SearchContextProps {
  weatherData: WeatherData | null
  history: WeatherData[]
  error: string | null
  //   handleSearchSubmit: (data: WeatherData) => void
  handleSearchSubmit: (city: string) => void
}

const defaultWeatherData: WeatherData = {
  temperature: 0,
  humidity: 0,
  location: '--',
  weatherType: '--',
  date: '--',
  temperature_max: 0,
  temperature_min: 0
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherData)
  const [history, setHistory] = useState<WeatherData[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSearchSubmit = async (city: string) => {
    try {
      const data = await fetchWeatherByCity(city)
      if (data) {
        setWeatherData(data)
        setHistory([data, ...history])
      } else {
        setError('City not found')
      }
    } catch (error) {
      console.error('Error fetching weather data', error)
      setError('City not found')
    }
  }

  return (
    <SearchContext.Provider value={{ weatherData, history, handleSearchSubmit, error }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
