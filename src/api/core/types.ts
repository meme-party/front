export interface ApiError {
  message: string
  status: number
  code?: string
  details?: Record<string, string | number | boolean | null>
}

// OpenAPI 타입과 일치하도록 수정
export interface PaginatedResponse<T> {
  results: T[]
  count: number
  next?: string | null // null 허용
  previous?: string | null // null 허용
}

export interface BaseResource {
  id: number | string
  created_at?: string
  updated_at?: string
}

export type CreateData<T extends BaseResource> = Omit<T, "id" | "created_at" | "updated_at">
export type UpdateData<T> = Partial<T>
