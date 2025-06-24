import queryString from "query-string"

export const createQueryUrl = <T extends Record<string, string | number | boolean | null | undefined>>(
  path: string,
  params: T
): string => {
  const query = queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true
  })
  return `${path}?${query}`
}
