import { SerieCard } from "../components/SerieCard"
import { useSeries } from "../hooks/useSeries"

export const Series = () => {
  const { marvel } = useSeries()

  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {marvel.series.map((serie, id) => (
          <SerieCard key={id} serie={serie} />
        ))}
      </div>
    </div>
  )
}
