import { css } from "@emotion/react";
import theme from "./theme";

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

type FlexType = {
  display?: "flex" | "block" | "inline-flex" | "inline-block";
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  justify?: "start" | "end" | "center";
  align?: "start" | "end" | "center";
};

export const FlexBox = ({
  display = "flex",
  direction = "column",
  justify = "center",
  align = "center"
}: FlexType) => css`
  display: ${display};
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const ButtonBox = css`
  border: 1px solid ${theme.main.primary};
  text-align: center;
  width: 100px;
  padding: 3px 7px;
  margin: 5px;
  cursor: pointer;
  border-radius: 50px;
  transition: all 300ms ease-in;
  &:hover {
    background-color: ${theme.main.primary};
  }
`;
