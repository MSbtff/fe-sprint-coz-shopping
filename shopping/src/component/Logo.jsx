import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/img/logo.svg';

const LogoWrapper = styled.h1`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 30px;
`;

const LogoText = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>
        <img src={LogoImg} alt="logo" />
        <LogoText>COZ Shopping</LogoText>
      </LogoWrapper>
    </Link>
  );
}
export default Logo;
