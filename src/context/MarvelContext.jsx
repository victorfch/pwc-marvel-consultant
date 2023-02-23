import { createContext, Dispatch, SetStateAction, useState } from "react"

const MarvelContext = createContext({
  marvel: {
    characters: [],
    series: [],
    comics: [],
  },
  setMarvel: item => {},
})

export const MarvelContextProvider = ({ children }) => {
  const [marvel, setMarvel] = useState({
    characters: [],
    comics: [],
    series: [],
  })

  return (
    <MarvelContext.Provider value={{ marvel, setMarvel }}>
      {children}
    </MarvelContext.Provider>
  )
}

export default MarvelContext
