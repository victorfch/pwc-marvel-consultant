import { SerieCard } from "../components/SerieCard"
import { useSeries } from "../hooks/useSeries"

export const Series = () => {
  const series = useSeries()
  console.log(series)
  return (
    <div className="px-2 pb-2">
       <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {series.map(serie => <SerieCard serie={serie} />)}
       </div>
    </div>
  )
}