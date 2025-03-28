import { deleteAccessToken, getAccessToken } from "@/api/getAuthToken"
import ky, { type Options } from "ky"
import { redirect } from "next/navigation"

export const instance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  retry: 0,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        const accessToken = getAccessToken()
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`)
        }
      }
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401 || response.status === 403) {
          deleteAccessToken()
          if (typeof window === "undefined") {
            redirect("/")
          } else {
            window.location.href = "/"
          }
        }
      }
    ]
  }
})

export const fetcher = {
  get: async <T>(pathname: string, options?: Options): Promise<T> => instance.get(pathname, options).json<T>(),

  post: async <T>(pathname: string, options?: Options): Promise<T> => instance.post(pathname, options).json<T>(),

  put: async <T>(pathname: string, options?: Options): Promise<T> => instance.put(pathname, options).json<T>(),

  delete: async <T>(pathname: string, options?: Options): Promise<T> => instance.delete(pathname, options).json<T>(),

  patch: async <T>(pathname: string, options?: Options): Promise<T> => instance.patch(pathname, options).json<T>()
}
