import { useContext, useEffect, useState } from "react"
import MarvelContext from "../context/MarvelContext"
import { getCharacters } from "../services/getCharacters"

const initialPage = 0

export const useCharacters = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    if (!marvel.characters.length) {
      getCharacters(page).then(data => {
        setMarvel({
          ...marvel,
          characters: data,
        })
      })
    }
  }, [])

  useEffect(() => {
    getCharacters(page).then(data => {
      setMarvel({
        ...marvel,
        characters: data,
      })
    })
  }, [page])

  return { marvel, setPage }
}
