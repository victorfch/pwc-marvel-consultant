import { Card } from "../components/Card"
import { useComics } from "../hooks/useComics"
import { Pagination } from "../components/Pagination"

export const Comics = () => {
  const { marvel, setPage } = useComics()

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
      <Pagination setPage={setPage} />
    </div>
  )
}
