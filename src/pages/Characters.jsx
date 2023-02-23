import { Link, useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { Pagination } from "../components/Pagination"
import { useCharacters } from "../hooks/useCharacters"

export const Characters = () => {
  const { marvel, setPage } = useCharacters()

  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {marvel.characters.map((character, id) => (
          <Card
            key={id}
            url={`/characters/${character.id}`}
            imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            title={character.name}
            description={character.description}
          />
        ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  )
}
