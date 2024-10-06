import React, { createContext, useCallback, useContext, useState } from 'react'
import { WeatherData } from '../@types'
import { fetchWeatherByCity } from '../api/weather.api'
import { toast } from 'react-toastify'
import { debounce } from '../utils/debounce'

interface SearchContextProps {
  weatherData: WeatherData | null
  history: WeatherData[]
  //   error: string | null
  loading: boolean
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
  const [loading, setLoading] = useState<boolean>(false)

  const handleSearchSubmit = async (city: string) => {
    if (!city) return

    setLoading(true)
    try {
      const data = await fetchWeatherByCity(city)
      if (data) {
        setWeatherData(data)
        setHistory([data, ...history])
      } else {
        toast('City not found. Please try again.', { position: 'top-right' })
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching weather data', error)
      setLoading(false)
      toast('City not found. Please try again.', { position: 'top-right' })
    }
  }

  const debouncedSearchSubmit = useCallback(debounce(handleSearchSubmit, 200), [history])

  return (
    <SearchContext.Provider value={{ weatherData, history, handleSearchSubmit: debouncedSearchSubmit, loading }}>
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
