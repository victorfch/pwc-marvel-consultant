import { Card } from "../components/Card"
import { Pagination } from "../components/Pagination"
import { useSeries } from "../hooks/serie/useSeries"

export const Series = () => {
  const { marvel, setPage, loading } = useSeries()

  if (loading) return <p>Loading...</p>

  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {marvel.series.map((serie, id) => (
          <Card
            key={id}
            url={`/series/${serie.id}`}
            imageSrc={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            title={serie.title}
            description={serie.description}
          />
        ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  )
}
