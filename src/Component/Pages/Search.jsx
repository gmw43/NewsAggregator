import React, { useContext } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { DataToPass } from './GlobalData'

const Search = () => {
  const { inputData, setInputData } = useContext(DataToPass)

  return (
    <form className="w-1/2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchOutlined />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by Author, Title"
          required
          onChange={(e) => setInputData(e.target.value.toLowerCase())} // Make input lowercase
        />
      </div>
    </form>
  )
}

export default Search
