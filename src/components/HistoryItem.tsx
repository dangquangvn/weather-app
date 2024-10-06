import React from 'react'
import { WeatherData } from '../@types'

interface HistoryItemProps {
  item: WeatherData
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  return (
    <li className='flex items-center justify-between rounded-xl bg-white bg-opacity-30 p-4 shadow-md'>
      {/* Left side: Location and Date */}
      <div className='flex flex-col'>
        <span className='font-medium text-gray-800'>{item.location}</span>
        <span className='text-sm text-gray-500'>{item.date}</span>
      </div>

      {/* Right side: Temperature and Actions */}
      <div className='flex items-center space-x-4'>
        <span className='text-lg font-semibold text-gray-700'>{item.temperature}&deg;C</span>

        <div className='flex space-x-2 text-gray-600'>
          <button
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white transition duration-200 ease-in-out hover:border-gray-200 hover:bg-gray-200 focus:outline-none active:scale-75'
            onClick={() => console.log(`Search ${item.location}`)}
          >
            <span className='icon-[mdi--search] flex-shrink-0' />
          </button>

          <button
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors duration-200 ease-in-out hover:border-red-200 hover:bg-red-300 active:scale-75'
            onClick={() => console.log(`Delete ${item.location}`)}
          >
            <span className='icon-[mdi--trash] flex-shrink-0' />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
