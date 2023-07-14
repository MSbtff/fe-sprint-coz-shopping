import React from 'react';
import {styled, css} from 'styled-components';
import {Link} from 'react-router-dom';
import bookmark from '../assets/img/bookmark.svg';
import product from '../assets/img/product.svg';

const DropdownWrapper = styled.nav`
  position: absolute;
  top: 70px;
  right: 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
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

const DropText = styled.li`
  text-align: center;
  padding: 13px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  padding: 0px 10px;
`;

export default function Dropdown() {
  return (
    <DropdownWrapper>
      <DropText>000 님 안녕하세요 </DropText>
      <DropText>
        <Image src={product} alt="" />
        상품리스트 페이지
      </DropText>
      <DropText>
        <Image src={bookmark} alt="" />
        북마크 페이지
      </DropText>
    </DropdownWrapper>
  );
}
