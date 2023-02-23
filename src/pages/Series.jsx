import { Card } from "../components/Card"
import { useSeries } from "../hooks/useSeries"

export const Series = () => {
  const { marvel } = useSeries()

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
    </div>
  )
}
