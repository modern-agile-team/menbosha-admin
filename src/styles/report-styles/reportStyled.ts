import { css } from "@emotion/react";
import theme from "../theme";

export const ReportContainer = css`
  display: flex;
  justify-content: center;
`;

export const ReportGrid = css`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr;
  font-size: 1em;
`;

export const ReportListGrid = css`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const ReportListContainer = css`
  border: 2px solid ${theme.main.primary};
  padding: 1vw;
`;

export const PaginationContainer = css`
  display: flex;
  justify-content: center;
  margin: 2vw;
  & > :nth-of-type(n) {
    cursor: pointer;
  }
`;

export const PaginationElementContainer = css`
  display: flex;
  justify-content: center;
`;

export const PaginationElement = (page: number, ownPage: number) => css`
  margin: 0px 1vw;
  border-bottom: ${page === ownPage ? "3px solid #000" : "none"};
`;

export const ReportDetailContainer = css`
  display: flex;
  justify-content: left;
  margin-left: 12vw;
`;

export const ReportedUserBox = css`
  display: flex;
`;

export const BorderLine = css`
  width: 100%;
  border-bottom: 1px solid #999999bf;
  margin: 30px 0px;
`;

export const ReportPeriodBox = (type: number) => css`
  background-color: ${type === 1 ? theme.main.primary : "#FFFFFF"};
  cursor: pointer;
  padding: 0.5vw;
  margin: 1vw 0.5vw;
  border-radius: 30px;
  transition: all 300ms ease;
  &:hover {
    background-color: ${theme.main.primary};
  }
`;
