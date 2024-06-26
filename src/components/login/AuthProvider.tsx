import Image from "next/image";

export const Naver = () => {
  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=test`;
  };

  return (
    <div>
      <Image
        src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/Login/newNaver.svg"
        alt="네이버로그인"
        onClick={naverLogin}
        width={265}
        height={48}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export const Kakao = () => {
  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
  };
  return (
    <div>
      <Image
        src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/Login/newKakao.svg"
        alt="카카오로그인"
        width={265}
        height={48}
        onClick={kakaoLogin}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export const Google = () => {
  const googleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}&access_type=offline&include_granted_scopes=true&response_type=code&state=test&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
  };
  return (
    <div>
      <Image
        src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/Login/newGoogle.svg"
        alt="구글로그인"
        width={265}
        height={48}
        onClick={googleLogin}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
