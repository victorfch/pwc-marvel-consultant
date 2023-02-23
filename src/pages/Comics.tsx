import { ComicCard } from "../components/ComicCard"
import { useComics } from "../hooks/useComics"

export const Comics = () => {
  const comics = useComics()
  console.log(comics)
  return (
    <div className="px-4 pb-2">
       <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        {comics.map(comic => <ComicCard comic={comic} />)}
       </div>
    </div>
  )
}