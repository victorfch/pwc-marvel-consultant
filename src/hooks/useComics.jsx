import { useContext, useEffect } from "react"
import MarvelContext from "../context/MarvelContext"
import { getComics } from "../services/getComics"

export const useComics = () => {
  const { marvel, setMarvel } = useContext(MarvelContext)

  useEffect(() => {
    if (!marvel.comics.length) {
      getComics().then(data => {
        setMarvel({
          ...marvel,
          comics: data,
        })
      })
    }
  }, [])

  return { marvel }
}
