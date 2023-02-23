import { useParams } from "react-router-dom"
import { useSerie } from "../hooks/useSerie"

export const SerieDetails = () => {
  const { id } = useParams()
  const { serie, loading } = useSerie(id)

  if (loading) return <p>Loading...</p>

  return (
    <div className="px-4 pb-2">
      <h1 className="text-4xl underline text-center">{serie?.title}</h1>
      <div className="flex flex-col md:flex-row justify-between my-4">
        <div className="w-full md:w-1/3">
          <img
            className="w-full"
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            alt={serie?.title}
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {serie.description && (
            <div>
              <div className="font-bold">Description:</div>
              {serie.description}
            </div>
          )}

          {serie.stories.available && (
            <div>
              <div className="font-bold">Stories:</div>
              <ul>
                {serie.stories.items.map((story, id) => (
                  <li key={id}>{story.name}</li>
                ))}
              </ul>
            </div>
          )}

          {serie.creators.available && (
            <div>
              <div className="font-bold">Creators:</div>
              <ul>
                {serie.creators.items.map((creator, id) => (
                  <li key={id}>{creator.name}</li>
                ))}
              </ul>
            </div>
          )}

          {serie.comics.available && (
            <div>
              <div className="font-bold">Comics:</div>
              <ul>
                {serie.comics.items.map((comic, id) => (
                  <li key={id}>{comic.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
