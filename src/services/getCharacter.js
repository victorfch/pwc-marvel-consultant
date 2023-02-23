const api = "https://gateway.marvel.com/v1/public"

export const getCharacter = async (id) => {
  const url = `${api}/characters/${id}?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const { data } = await res.json()

  return data.results[0]
}