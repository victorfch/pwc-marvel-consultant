import { Card } from "../components/Card"
import { Pagination } from "../components/Pagination"
import { useCharacters } from "../hooks/character/useCharacters"

export const Characters = () => {
  const { marvel, setPage, loading } = useCharacters()

  if (loading) return <p>Loading...</p>

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
