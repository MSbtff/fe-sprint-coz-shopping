import React from 'react';
import {styled, css} from 'styled-components';
import {Link} from 'react-router-dom';
import bookmark from '../assets/img/bookmark.svg';
import product from '../assets/img/product.svg';

const DropdownWrapper = styled.nav`
  position: absolute;
  top: 70px;
  right: -64px;
  width: 220px;
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 16px;
  box-shadow: 0px 8px 8px 0px #0000001a;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 130px;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 18px solid transparent;
    border-bottom-color: #ffffff;
    border-top: 0;
    margin-top: -18px;
  }
`;

const WelcomeText = styled.p`
  padding: 13px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export default function Dropdown() {
  return (
    <DropdownWrapper>
      <WelcomeText>000님, 안녕하세요!</WelcomeText>
      <img src={product} alt="product">
        상품리스트 페이지
      </img>
      <img src={bookmark} alt="bookmark">
        북마크 페이지
      </img>
    </DropdownWrapper>
  );
}
