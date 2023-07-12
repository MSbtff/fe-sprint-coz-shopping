import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from './Logo';

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 80px;
  margin: 0 auto;
`;

const ShadowWrapper = styled.div`
  box-shadow: 0px 8px 8px 0px #0000001a;
`;

function Header() {
  return (
    <ShadowWrapper>
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    </ShadowWrapper>
  );
}

export default Header;
