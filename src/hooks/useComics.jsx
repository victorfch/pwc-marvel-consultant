import { useContext, useEffect, useState } from "react"
import MarvelContext from "../context/MarvelContext"
import { getComics } from "../services/getComics"

const initialPage = 0

export const useComics = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    if (!marvel.comics.length) {
      getComics(page).then(data => {
        setMarvel({
          ...marvel,
          comics: data,
        })
      })
    }
  }, [])

  useEffect(() => {
    getComics(page).then(data => {
      setMarvel({
        ...marvel,
        comics: data,
      })
    })
  }, [page])

  return { marvel, setPage }
}
