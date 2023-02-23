import { CharacterCard } from "../components/CharacterCard.js"
import { useCharacters } from "../hooks/useCharacters.js"

export const Characters = () => {
  const characters = useCharacters()
  
  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {characters.map(character => <CharacterCard character={character} />)}
      </div>
    </div>
  )
}