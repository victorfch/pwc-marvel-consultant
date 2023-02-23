import { useParams } from "react-router-dom"
import { ViewFieldArray } from "../components/ViewFieldArray"
import { useSerie } from "../hooks/serie/useSerie"

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
            <ViewFieldArray title="Stories" items={serie.stories.items} />
          )}

          {serie.creators.available && (
            <ViewFieldArray title="Creators" items={serie.creators.items} />
          )}

          {serie.comics.available && (
            <ViewFieldArray title="Comics" items={serie.comics.items} />
          )}
        </div>
      </div>
    </div>
  )
}
