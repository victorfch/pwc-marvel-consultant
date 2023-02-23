import { useEffect, useState } from "react"
import { getCharacter } from "../services/getCharacter"

export const useCharacter = id => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    getCharacter(id).then(data => {
      setCharacter(data)
    })
  }, [id])

  return character
}
