export const SerieCard = ({ serie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
        alt={serie.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{serie.title}</div>
        <div className="text-gray-700 text-base">{serie.description}</div>
      </div>
    </div>
  )
}
