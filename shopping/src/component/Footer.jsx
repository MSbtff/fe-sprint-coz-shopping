import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  height: 80px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e5e5e5;
`;

const FooterText = styled.p`
  font-size: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 88.02%;
  color: #828282;
  margin-top: 0.5rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>개인정보 처리방침 | 이용 약관</FooterText>
      <FooterText>All rigths reserved @ Codestates</FooterText>
    </FooterWrapper>
  );
}
