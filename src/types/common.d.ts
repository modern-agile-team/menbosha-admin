/**페이지네이션 페이지 타입 */
export type PaginationPageType<T> = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
  lastPage: number;
} & T;
