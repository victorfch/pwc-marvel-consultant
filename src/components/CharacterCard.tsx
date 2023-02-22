export const CharacterCard = ({character}: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
        <div className="text-gray-700 text-base">{character.description}</div>
      </div>
    </div>
  )

}