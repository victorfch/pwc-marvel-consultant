import { ComicCard } from "../components/ComicCard"
import { useComics } from "../hooks/useComics"

export const Comics = () => {
  const { marvel } = useComics()

  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {marvel.comics.map((comic, id) => (
          <ComicCard key={id} comic={comic} />
        ))}
      </div>
    </div>
  )
}
