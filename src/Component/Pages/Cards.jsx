import React, { useContext } from 'react'
import tesla from '../Images/Tesla.webp'
import { DataToPass } from './GlobalData'

const Cards = ({ article }) => {
  const { inputData } = useContext(DataToPass)
  const { newsData } = article

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        {newsData
          .filter(
            (item) =>
              inputData === '' ||
              item.title.toLowerCase().includes(inputData) ||
              (item.author && item.author.includes(inputData))
          )
          .map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={item.url}>
                {item.urlToImage ? (
                  <img
                    className="rounded-t-lg"
                    src={item.urlToImage}
                    alt={item.title}
                  />
                ) : (
                  <img className="rounded-t-lg" src={tesla} alt={item.title} />
                )}
              </a>
              <div className="p-5">
                <a href={item.url}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.author}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.publishedAt}
                </p>
                <a
                  href={item.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more about
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Cards
