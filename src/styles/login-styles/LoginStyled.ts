import { css } from "@emotion/react";

export const LoginContainer = css`
  display: flex;
  justify-content: center;
  border: solid 2px #9fe;
`;

export const LoginBox = css`
  border: solid 2px #f00;
  margin: 10%;
  width: 225px;
  height: 250px;
  //로그인로고
  & > :nth-child(1) {
    text-align: center;
    margin: 5vh 2.5vh;
  }
`;

export const AuthProviderImg = css`
  margin: 2.5vh;
  text-align: center;
`;
