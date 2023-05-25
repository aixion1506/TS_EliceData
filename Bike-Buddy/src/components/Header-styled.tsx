import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
`;

export const AlignCenter = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 1.4rem;
    font-weight: bold;
    color: green;
  }
`;
