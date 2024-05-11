import { css } from "@emotion/react";

export const NavigateBarContainer = css`
  display: flex;
  width: 90%;
  justify-content: center;
  & > :nth-child(n) {
    margin: 1vw;
    text-decoration: none;
    color: #ff772b;
    width: 15vw;
    font-size: 1em;
    margin: auto 0px;
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
