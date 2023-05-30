/** 회원가입 요청 정보 타입 선언 */
export type UserdataRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nickname: string;
  minLength: number;
};

/** 로그인 요청 정보 타입 선언 */
export type LoginUser = {
  email: string;
  password: string;
};

export type LoginInfo = {
  // 타입지정을 명확히 해줘야 타입 에러가 발생하지 않음
  item: { jwtToken: string };
  success: string;
};
