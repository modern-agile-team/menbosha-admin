/**신고 종류 */
enum reportType {
  "증오발언 및 혐오표현 게시글",
  "불법성 게시글 및 불법 촬영물",
  "홍보성 게시글"
}

export type ReportParamsType = {
  page?: number;
  pageSize?: number;
  id?: number;
  reportUserId?: number; //신고한 유저 필터링
  reportedUserId?: number; //신고 당한 유저 필터링
  type: reportType;
  reason: string;
  orderField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type ReportListType = {
  ReportPaginationResponseDto: {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    lastPage: number;
    reportsItemDto: {
      id: number;
      reportUserId: number;
      reportedUserId: number;
      type: reportType;
      createdAt: string;
    }[];
  };
};