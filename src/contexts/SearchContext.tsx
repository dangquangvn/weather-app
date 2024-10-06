import React, { createContext, useContext, useState } from 'react'
import { WeatherData } from '../@types'

interface SearchContextProps {
  weatherData: WeatherData | null
  history: WeatherData[]
  handleSearchSubmit: (data: WeatherData) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [history, setHistory] = useState<WeatherData[]>([])

  const handleSearchSubmit = (data: WeatherData) => {
    setWeatherData(data)
    setHistory([data, ...history])
  }

  return (
    <SearchContext.Provider value={{ weatherData, history, handleSearchSubmit }}>{children}</SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
