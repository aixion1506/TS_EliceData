import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  AlignCenter,
  LogoContainer,
  GotoAccount,
  NavContainer,
  // Nav,
} from './Header-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <AlignCenter>
        <LogoContainer>
          <Link to='/'>BikeBuddy</Link>
        </LogoContainer>
        <NavContainer>
          <GotoAccount>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </GotoAccount>
        </NavContainer>
      </AlignCenter>
    </HeaderWrapper>
  );
};

export default Header;
