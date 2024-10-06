import React from 'react'
import HistoryItem from './HistoryItem'
import { useSearch } from '../contexts/SearchContext'

const SearchHistory: React.FC = () => {
  const { history } = useSearch()

  if (!history.length) return null

  return (
    <div
      className='rounded-3xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md dark:border-gray-900 dark:bg-gray-600 dark:bg-opacity-10 dark:text-gray-300'
      data-aos='fade-up'
      data-aos-delay='500'
    >
      <h2 className='text-md mb-4 font-bold text-gray-700 md:text-lg dark:text-gray-200'>Search History</h2>
      <div className='max-h-80 overflow-y-auto'>
        <ul className='space-y-4'>
          {history.map((item, index) => (
            <HistoryItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchHistory
