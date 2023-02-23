const api = "https://gateway.marvel.com/v1/public"

export const getComics = async (page) => {
  const url = `${api}/comics?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&limit=10&offset=${page * 10}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const { data } = await res.json()

  return data.results
}