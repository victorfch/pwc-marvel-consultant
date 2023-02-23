import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getSingleItem } from "../../services/api"

export const useComic = id => {
  const { marvel } = useContext(MarvelContext)
  const comicSaved = marvel.comics.find(comic => comic.id == id)
  const [comic, setComic] = useState(comicSaved)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!comic) {
      getSingleItem("comics", id).then(data => {
        setComic(data)
        setLoading(false)
      })
      return
    }
    setLoading(false)
  }, [id])

  return { comic, loading }
}
