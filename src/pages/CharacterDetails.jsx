import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"

export const CharacterDetails = () => {
  const { id } = useParams()
  const character = useCharacter(id)
  console.log(character)

  return (
    <div className="px-4 pb-2">
      <h1 className="text-4xl underline text-center">{character?.name}</h1>
    </div>
  )
}
