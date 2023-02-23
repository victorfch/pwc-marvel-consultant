import { useContext, useEffect, useState } from "react"
import MarvelContext from "../context/MarvelContext"
import { getCharacters } from "../services/getCharacters"

export const useCharacters = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)

  useEffect(() => {
    if (!marvel.characters.length) {
      getCharacters().then(data => {
        setMarvel({
          ...marvel,
          characters: data,
        })
      })
    }
  }, [])

  return { marvel }
}
