import { useParams } from "react-router-dom"
import { useComic } from "../hooks/useComic"

export const ComicDetails = () => {
  const { id } = useParams()
  const { comic, loading } = useComic(id)
  console.log(loading)
  console.log(comic)

  if (loading) return <p>Loading...</p>

  return (
    <div className="px-4 pb-2">
      <h1 className="text-4xl underline text-center">{comic?.title}</h1>
      <div className="flex flex-col md:flex-row justify-between my-4">
        <div className="w-full md:w-1/3">
          <img
            className="w-full"
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic?.title}
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {comic.description && (
            <div>
              <div className="font-bold">Description:</div>
              {comic.description}
            </div>
          )}

          {comic.series.available && (
            <div>
              <div className="font-bold">Series:</div>
              <ul>
                {character.series.items.map((serie, id) => (
                  <li key={id}>{serie.name}</li>
                ))}
              </ul>
            </div>
          )}

          {comic.stories.available && (
            <div>
              <div className="font-bold">Stories:</div>
              <ul>
                {comic.stories.items.map((story, id) => (
                  <li key={id}>{story.name}</li>
                ))}
              </ul>
            </div>
          )}

          {comic.creators.available && (
            <div>
              <div className="font-bold">Creators:</div>
              <ul>
                {comic.creators.items.map((creator, id) => (
                  <li key={id}>{creator.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
