const api = "https://gateway.marvel.com/v1/public"

export const getSeries = async() => {
  const url = `${api}/series?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const {data} = await res.json()

  return data.results
}