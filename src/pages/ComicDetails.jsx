import { useParams } from "react-router-dom"
import { ViewFieldArray } from "../components/ViewFieldArray"
import { useComic } from "../hooks/comic/useComic"

export const ComicDetails = () => {
  const { id } = useParams()
  const { comic, loading } = useComic(id)

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
            <ViewFieldArray title="Series" items={comic.series.items} />
          )}
          {comic.stories.available && (
            <ViewFieldArray title="Stories" items={comic.stories.items} />
          )}

          {comic.creators.available && (
            <ViewFieldArray title="Creators" items={comic.creators.items} />
          )}
        </div>
      </div>
    </div>
  )
}
