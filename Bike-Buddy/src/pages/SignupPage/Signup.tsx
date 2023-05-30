import React from 'react';
import * as SC from './SignupSC';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  return (
    <SC.SignupWrapper>
      <h1>회원가입</h1>
      <SC.SignupForm onSubmit={signupSubmit}>
        <SC.InputWrapper>
          <label>이름</label>
          <br />
          <input
            type='text'
            required
            // value={name}
            // onChange={checkName}
            // ref={nameRef}
            placeholder='이름을 입력하세요(2 - 6글자)'
          />
          {/* {name
            ? isNameValid || (
                <InvalidMessage>{InvalidMessages.name}</InvalidMessage>
              )
            : null} */}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <label>이메일</label>
          <br />
          <input
            type='text'
            required
            // value={email}
            // onChange={checkEmail}
            // ref={emailRef}
            placeholder='이메일을 입력하세요'
          />
          {/* {email
            ? isEmailValid || (
                <InvalidMessage>{InvalidMessages.email}</InvalidMessage>
              )
            : null} */}
        </SC.InputWrapper>
        <SC.InputWrapper>
          <label>비밀번호</label>
          <br />
          <input
            type='password'
            required
            minLength='8'
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder='비밀번호를 입력하세요(8글자 이상)'
          />
        </SC.InputWrapper>
        <SC.InputWrapper>
          <label>비밀번호 확인</label>
          <br />
          <input
            type='password'
            required
            minLength='8'
            // value={passwordConfirm}
            // onChange={(e) => setPasswordConfirm(e.target.value)}
            // ref={pwRef}
            placeholder='비밀번호를 한 번 더 입력하세요'
          />
          {/* {isPwMatch || (
            <InvalidMessage>{InvalidMessages.password}</InvalidMessage>
          )} */}
        </SC.InputWrapper>
        <SC.Button>회원가입</SC.Button>
        <SC.GotoLogin>
          <Link to='/login'>이미 계정이 있으신가요?</Link>
        </SC.GotoLogin>
        <br />
      </SC.SignupForm>
    </SC.SignupWrapper>
  );
};

export default Signup;
