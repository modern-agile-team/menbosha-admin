import { css } from "@emotion/react";

const ArrowBase = css`
  display: inline-block;
  width: 35px;
  height: 0;
  margin: 10px 10px;
`;

export const ArrowIcon = (direction: string) => {
  switch (direction) {
    case "UP":
      return css`
        ${ArrowBase}
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid black;
      `;
    case "DOWN":
      return css`
        ${ArrowBase}
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid black;
      `;
    case "RIGHT":
      return css`
        ${ArrowBase}
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid black;
      `;
    case "LEFT":
      return css`
        ${ArrowBase}
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid black;
      `;
  }
};
