import React, { createContext, useState } from 'react'

export const DataToPass = createContext(null)

export const GlobalProvider = ({ children }) => {
  const [inputData, setInputData] = useState([])

  return (
    <DataToPass.Provider value={{ inputData, setInputData }}>
      {children}
    </DataToPass.Provider>
  )
}
