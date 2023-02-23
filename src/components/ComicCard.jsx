export const ComicCard = ({ comic }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{comic.title}</div>
        <div className="text-gray-700 text-base">{comic.description}</div>
      </div>
    </div>
  )
}
