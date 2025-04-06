import { fetcher } from "@/api/fetcher"
import { Meme } from "@/openapi/models/Meme"

export const getApiV1MemesId = (id: string | number) => {
  return fetcher.get<Meme>(`api/v1/memes/${id}`)
}
