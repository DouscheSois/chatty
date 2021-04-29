import React from "react";
import styled, { css } from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

import BeemaLogo from "../assets/images/logo.svg";
import { theme } from "../theme";

const Logo = (props) => {
  const { inline, small } = props;
  return (
    <LinkContainer to="/">
      <LogoContainer inline={inline} small={small}>
        <LogoImg src={BeemaLogo} inline={inline} small={small} />
        <LogoText inline={inline} small={small}>
          Chatty
        </LogoText>
      </LogoContainer>
    </LinkContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#333" : theme.primary)};
  font-weight: 900;
`;

export default Logo;
