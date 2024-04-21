import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero'
import TopHeader from './TopHeader'
import Cards from './Cards'

const Home = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d457a07d519449969d3be1aa77d9b300'
        )
        setNewsData(response.data.articles)
      } catch (error) {
        console.error(error)
      }
    }

    fetchNews()
  }, [])

  const article = {
    newsData: newsData,
  }

  return (
    <>
      <TopHeader />
      <Hero />

      <Cards article={article} />
    </>
  )
}

export default Home
