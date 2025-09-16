import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  type UseQueryOptions,
  type UseMutationOptions,
  type UseInfiniteQueryOptions,
  type InfiniteData
} from "@tanstack/react-query"
import type { ApiError } from "./types"

// 유연한 ResourceAPI 인터페이스
export interface ResourceAPI<TResource, TListParams = unknown, TCreateData = unknown, TUpdateData = unknown> {
  getList: (params?: TListParams) => Promise<unknown> // 더 유연하게
  getById: (id: number | string) => Promise<TResource>
  create?: (data: TCreateData) => Promise<TResource> // 선택적
  update?: (id: number | string, data: TUpdateData) => Promise<TResource> // 선택적
  delete?: (id: number | string) => Promise<void> // 선택적
}

export interface QueryKeys {
  all: readonly unknown[]
  lists: () => readonly unknown[]
  list: (params?: unknown) => readonly unknown[]
  detail: (id: number | string) => readonly unknown[]
}

export function createResourceHooks<
  TResource,
  TListParams = unknown,
  TCreateData = unknown,
  TUpdateData = unknown,
  TListResponse = unknown
>({
  resourceName,
  api,
  queryKeys
}: {
  resourceName: string
  api: ResourceAPI<TResource, TListParams, TCreateData, TUpdateData>
  queryKeys: QueryKeys
}) {
  return {
    // 📋 리스트 조회
    useListQuery: (
      params?: TListParams,
      options?: Omit<UseQueryOptions<TListResponse, ApiError>, "queryKey" | "queryFn">
    ) =>
      useQuery({
        queryKey: queryKeys.list(params),
        queryFn: () => api.getList(params),
        ...options
      }),

    // 📄 상세 조회
    useDetailQuery: (
      id: number | string,
      options?: Omit<UseQueryOptions<TResource, ApiError>, "queryKey" | "queryFn">
    ) =>
      useQuery({
        queryKey: queryKeys.detail(id),
        queryFn: () => api.getById(id),
        enabled: !!id,
        ...options
      }),

    // ➕ 생성 (api.create가 있을 때만)
    useCreateMutation: api.create
      ? (options?: UseMutationOptions<TResource, ApiError, TCreateData>) => {
          const queryClient = useQueryClient()

          return useMutation({
            mutationFn: api.create!,
            onSuccess: (data, variables, context) => {
              // 🔄 관련 캐시 무효화
              queryClient.invalidateQueries({ queryKey: queryKeys.all })

              // 🎯 새로 생성된 데이터를 캐시에 즉시 저장
              if (data && typeof data === "object" && "id" in data) {
                queryClient.setQueryData(queryKeys.detail(data.id as string | number), data)
              }

              console.log(`✅ ${resourceName} 생성 성공`)
              options?.onSuccess?.(data, variables, context)
            },
            onError: (error, variables, context) => {
              console.error(`❌ ${resourceName} 생성 실패:`, error)
              options?.onError?.(error, variables, context)
            },
            ...options
          })
        }
      : undefined,

    // ✏️ 수정 (api.update가 있을 때만)
    useUpdateMutation: api.update
      ? (options?: UseMutationOptions<TResource, ApiError, { id: number | string; data: TUpdateData }>) => {
          const queryClient = useQueryClient()

          return useMutation({
            mutationFn: ({ id, data }) => api.update!(id, data),
            onSuccess: (data, variables, context) => {
              // 🎯 수정된 데이터를 캐시에 즉시 반영
              queryClient.setQueryData(queryKeys.detail(variables.id), data)

              // 🔄 리스트 캐시 무효화 (정렬 순서 등이 변경될 수 있음)
              queryClient.invalidateQueries({ queryKey: queryKeys.lists() })

              console.log(`✅ ${resourceName} 수정 성공`)
              options?.onSuccess?.(data, variables, context)
            },
            onError: (error, variables, context) => {
              console.error(`❌ ${resourceName} 수정 실패:`, error)
              options?.onError?.(error, variables, context)
            },
            ...options
          })
        }
      : undefined,

    // 🗑️ 삭제 (api.delete가 있을 때만)
    useDeleteMutation: api.delete
      ? (options?: UseMutationOptions<void, ApiError, number | string>) => {
          const queryClient = useQueryClient()

          return useMutation({
            mutationFn: api.delete!,
            onSuccess: (data, id, context) => {
              // 🗑️ 삭제된 항목의 캐시 제거
              queryClient.removeQueries({ queryKey: queryKeys.detail(id) })

              // 🔄 리스트 캐시 무효화
              queryClient.invalidateQueries({ queryKey: queryKeys.lists() })

              console.log(`✅ ${resourceName} 삭제 성공`)
              options?.onSuccess?.(data, id, context)
            },
            onError: (error, variables, context) => {
              console.error(`❌ ${resourceName} 삭제 실패:`, error)
              options?.onError?.(error, variables, context)
            },
            ...options
          })
        }
      : undefined
  }
}

// 🔧 무한 스크롤을 위한 헬퍼
export function createInfiniteQueryHook<TParams, TData extends { next?: string | null; [key: string]: unknown }>({
  queryKey,
  queryFn
}: {
  queryKey: readonly unknown[]
  queryFn: (params?: TParams & { page?: number }) => Promise<TData>
}) {
  return (
    params?: TParams,
    options?: Omit<
      UseInfiniteQueryOptions<TData, ApiError, InfiniteData<TData>>,
      "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
    >
  ) =>
    useInfiniteQuery({
      queryKey: [...queryKey, params],
      queryFn: ({ pageParam = 1 }) => queryFn({ ...params, page: pageParam } as TParams & { page?: number }),
      getNextPageParam: (lastPage: TData) => {
        if (!lastPage?.next) return undefined
        try {
          const url = new URL(lastPage.next)
          const nextPage = url.searchParams.get("page")
          return nextPage ? Number(nextPage) : undefined
        } catch {
          return undefined
        }
      },
      initialPageParam: 1,
      ...options
    })
}

// 🔑 Query Key 팩토리 생성 헬퍼
export function createQueryKeyFactory(prefix: string): QueryKeys {
  return {
    all: [prefix] as const,
    lists: () => [prefix, "list"] as const,
    list: (params?: unknown) => [prefix, "list", params] as const,
    detail: (id: number | string) => [prefix, "detail", id] as const
  }
}
