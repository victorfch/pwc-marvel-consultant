const api = "https://gateway.marvel.com/v1/public"

export const getComic = async (id) => {
  const url = `${api}/comics/${id}?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const { data } = await res.json()
  console.log("calling get single comic")

  return data.results[0]
}