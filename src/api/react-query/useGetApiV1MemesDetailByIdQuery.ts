import { Meme } from "@/openapi/models/Meme"
import { useQuery } from "@tanstack/react-query"
import { getApiV1MemesId } from "@/api/getApiV1MemesId"

export const useGetApiV1MemesDetailByIdQuery = (id: string | number) => {
  return useQuery<Meme, Error>({
    queryKey: [`/api/v1/memes/${id}`],
    queryFn: () => getApiV1MemesId(id)
  })
}
