import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import {useState} from 'react';
import DropdownButton from './DropdownButton';
import Dropdown from './Dropdown';

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 auto;
  box-shadow: 0px 8px 8px 0px #0000001a;
  padding: 0 50px;
`;

// const ShadowWrapper = styled.div`
//   box-shadow: 0px 8px 8px 0px #0000001a;
// `;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo />
      <DropdownButton setIsOpen={setIsOpen} />
      {isOpen && <Dropdown />}
    </HeaderWrapper>
  );
}

export default Header;
