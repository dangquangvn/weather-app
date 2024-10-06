import React from 'react'
import HistoryItem from './HistoryItem'
import { useSearch } from '../contexts/SearchContext'

const SearchHistory: React.FC = () => {
  const { history } = useSearch()

  if (!history.length) return null

  return (
    <div className='rounded-3xl bg-white bg-opacity-10 p-6 shadow-md backdrop-blur-md dark:border-gray-900 dark:bg-gray-600 dark:bg-opacity-10 dark:text-gray-300'>
      <h2 className='mb-4 text-lg font-bold text-gray-700 dark:text-gray-200'>Search History</h2>
      <ul className='space-y-4'>
        {history.map((item, index) => (
          <HistoryItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default SearchHistory
