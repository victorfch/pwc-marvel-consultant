import { useContext, useEffect, useState } from "react"
import MarvelContext from "../../context/MarvelContext"
import { getSingleItem } from "../../services/api"

export const useCharacter = id => {
  const { marvel } = useContext(MarvelContext)
  const characterSaved = marvel.characters.find(character => character.id == id)
  const [character, setCharacter] = useState(characterSaved)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!character) {
      getSingleItem("characters", id).then(data => {
        setCharacter(data)
        setLoading(false)
      })
      return
    }
    setLoading(false)
  }, [id])

  return { character, loading }
}
