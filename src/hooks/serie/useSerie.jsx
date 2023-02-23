import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getSingleItem } from "../../services/api"

export const useSerie = id => {
  const { marvel } = useContext(MarvelContext)
  const serieSaved = marvel.series.find(serie => serie.id == id)
  const [serie, setSerie] = useState(serieSaved)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!serie) {
      getSingleItem("series", id).then(data => {
        setSerie(data)
        setLoading(false)
      })
      return
    }
    setLoading(false)
  }, [id])

  return { serie, loading }
}
