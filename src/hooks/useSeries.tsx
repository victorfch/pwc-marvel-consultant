import { useEffect, useState } from "react"
import {getSeries} from "./../services/getSeries"

export const useSeries = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    getSeries()
      .then(data => {
        setSeries(data)
      })

  }, [])

  return series
}