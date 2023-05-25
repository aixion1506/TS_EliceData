import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, AlignCenter, LogoContainer } from './Header-styled';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <AlignCenter>
        <LogoContainer>
          <Link to='/'>BikeBuddy</Link>
        </LogoContainer>
      </AlignCenter>
    </HeaderWrapper>
  );
};

export default Header;
