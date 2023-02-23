import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getItems } from "../../services/api"

const initialPage = 0

export const useComics = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!marvel.comics.length) {
      getItems("comics", page).then(data => {
        setMarvel({
          ...marvel,
          comics: data,
        })
        setLoading(false)
      })
      return
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    getItems("comics", page).then(data => {
      setMarvel({
        ...marvel,
        comics: data,
      })
      setLoading(false)
    })
  }, [page])

  return { marvel, setPage, loading }
}
