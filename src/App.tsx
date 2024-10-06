import { useEffect } from 'react'
import './App.css'
import { LoadingSpinner } from './components/Loading'
import SearchBar from './components/SearchBar'
import SearchHistory from './components/SearchHistory'
import ThemeSwitcher from './components/ThemeSwitcher'
import WeatherDisplay from './components/WeatherDisplay'
import { useSearch } from './contexts/SearchContext'
import AOS from 'aos'

function App() {
  const { loading } = useSearch()

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      delay: 100
    })
  }, [])

  return (
    <div className="relative min-h-screen w-screen bg-[url('./assets/bg-light.png')] bg-cover bg-center dark:bg-[url('./assets/bg-dark.png')]">
      <div className='container mx-auto flex min-h-screen flex-col items-center space-y-20 px-4 pt-4 md:space-y-28'>
        {/* SEARCH BAR */}
        <div className='w-full max-w-2xl'>
          <SearchBar />
        </div>
        {/* WEATHER DATA */}
        <div className='relative w-full max-w-2xl rounded-3xl border border-white border-opacity-20 bg-white bg-opacity-10 p-8 shadow-2xl backdrop-blur-md dark:border-gray-600 dark:bg-gray-800 dark:bg-opacity-40 dark:shadow-2xl'>
          <WeatherDisplay />
          <div className='mt-7'>
            <SearchHistory />
          </div>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <LoadingSpinner />
            </div>
          )}
        </div>
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default App
