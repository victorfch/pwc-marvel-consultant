import { createContext, useState } from "react"

const initialState = {
  characters: [],
  comics: [],
  series: [],
}

const MarvelContext = createContext()

export const MarvelContextProvider = ({ children }) => {
  const [marvel, setMarvel] = useState(initialState)

  return (
    <MarvelContext.Provider value={{ marvel, setMarvel }}>
      {children}
    </MarvelContext.Provider>
  )
}

export default MarvelContext
