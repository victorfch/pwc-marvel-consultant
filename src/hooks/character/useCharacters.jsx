import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getItems } from "../../services/api"

const initialPage = 0

export const useCharacters = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!marvel.characters.length) {
      getItems("characters", page).then(data => {
        setMarvel({
          ...marvel,
          characters: data,
        })
        setLoading(false)
      })
      return
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    getItems("characters", page).then(data => {
      setMarvel({
        ...marvel,
        characters: data,
      })
      setLoading(false)
    })
  }, [page])

  return { marvel, setPage, loading }
}
