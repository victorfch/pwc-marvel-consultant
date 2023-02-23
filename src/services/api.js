const api = "https://gateway.marvel.com/v1/public"

export const getItems = async (field, page = 0) => {
  const url = `${api}/${field}?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&limit=10&offset=${page * 10}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const { data } = await res.json()

  return data.results
}

export const getSingleItem = async (field, id) => {
  const url = `${api}/${field}/${id}?ts=1000&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${import.meta.env.VITE_API_HASH}`
  const res = await fetch(url)
  const { data } = await res.json()

  return data.results[0]
}