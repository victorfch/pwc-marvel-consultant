import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"

export const CharacterDetails = () => {
  const { id } = useParams()
  const { character, loading } = useCharacter(id)

  if (loading) return <p>Loading...</p>

  return (
    <div className="px-4 pb-2">
      <h1 className="text-4xl underline text-center">{character?.name}</h1>
      <div className="flex flex-col md:flex-row justify-between my-4">
        <div className="w-full md:w-1/3">
          <img
            className="w-full"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character?.name}
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {character.description && (
            <div>
              <div className="font-bold">Description:</div>
              {character.description}
            </div>
          )}

          {character.series.available && (
            <div>
              <div className="font-bold">Series:</div>
              <ul>
                {character.series.items.map((serie, id) => (
                  <li key={id}>{serie.name}</li>
                ))}
              </ul>
            </div>
          )}

          {character.stories.available && (
            <div>
              <div className="font-bold">Stories:</div>
              <ul>
                {character.stories.items.map((story, id) => (
                  <li key={id}>{story.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
