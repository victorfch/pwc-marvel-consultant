import { Card } from "../components/Card"
import { useComics } from "../hooks/useComics"

export const Comics = () => {
  const { marvel } = useComics()

  return (
    <div className="px-4 pb-2">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {marvel.comics.map((comic, id) => (
          <Card
            key={id}
            url={`/comics/${comic.id}`}
            imageSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            title={comic.title}
            description={comic.description}
          />
        ))}
      </div>
    </div>
  )
}
