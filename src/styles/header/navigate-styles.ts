import { css } from "@emotion/react";

export const NavigateBarContainer = css`
  display: flex;
  width: 90%;
  justify-content: center;
  & > :nth-child(n) {
    text-decoration: none;
    color: #ff772b;
    width: 10vw;
    font-size: 1em;
    text-align: center;
    margin: auto 5vw;
    &:hover {
      font-weight: bold;
    }
  }
`;

export const LogoContainer = css`
  display: flex;
`;

export const LogoBox = css`
  margin: 1vw;
`;
