import React from 'react';
import styled from 'styled-components';
import hamburger from '../assets/img/hamburger.svg';

const Hamburger = styled.div`
  cursor: pointer;
`;

export default function DropdownButton(setIsOpen) {
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <Hamburger>
      <img src={hamburger} alt="hamburger" onClick={handleClick} />
    </Hamburger>
  );
}
