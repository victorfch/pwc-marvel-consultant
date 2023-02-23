import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getItems } from "../../services/api"

const initialPage = 0

export const useSeries = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!marvel.series.length) {
      getItems("series", page).then(data => {
        setMarvel({
          ...marvel,
          series: data,
        })
        setLoading(false)
      })
      return
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    getItems("series", page).then(data => {
      setMarvel({
        ...marvel,
        series: data,
      })
      setLoading(false)
    })
  }, [page])

  return { marvel, setPage, loading }
}
