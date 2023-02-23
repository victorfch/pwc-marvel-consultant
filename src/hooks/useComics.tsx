import { useEffect, useState } from "react"
import {getComics} from "./../services/getComics"

export const useComics = () => {
  const [comics, setComics] = useState([])

  useEffect(() => {
    getComics()
      .then(data => {
        setComics(data)
      })

  }, [])

  return comics
}