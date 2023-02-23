import { useContext, useEffect, useState } from "react"
import MarvelContext from "../context/MarvelContext"
import { getSeries } from "../services/getSeries"

export const useSeries = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)

  useEffect(() => {
    if (!marvel.series.length) {
      getSeries().then(data => {
        setMarvel({
          ...marvel,
          series: data,
        })
      })
    }
  }, [])

  return { marvel }
}
