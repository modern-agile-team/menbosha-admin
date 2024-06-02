import { PaginationPageType } from "./common";

/**밴 페이지네이션 params타입 */
export type BanParamsType = {
  page: number;
  pageSize: number;
  id?: number;
  banUserId?: number;
  bannedUserId?: number;
  reason?: string;
  orderField?: "id" | "reason" | "bannedAt" | "endAt";
  sortOrder?: "ASC" | "DESC";
};

/**밴 페이지네이션 타입 */
export type BanListType = PaginationPageType<{
  bannedUsersItemDto: {
    id: number;
    banUserId: number;
    bannedUserId: number;
    bannedAt: string;
    endAt: string;
  }[];
}>;

/**밴 라우트 번호 props타입 */
export type BanDetailPropsType = {
  banId: number;
};

/**밴 api return type */
export type BanDetailReturnType = {
  id: number;
  banUserId: number;
  bannedUserId: number;
  reason: string;
  bannedAt: string;
  endAt: string;
};
