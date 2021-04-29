import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Button from "../Button";
import Logo from "../Logo";
import Marginer from "../Marginer";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo small />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Join the millions of users</MotivationalText>
      <MotivationalText>yoloing their life savings</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button>Start the Word</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2021 Chatty All rights reserved</RightsReserved>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export default Footer;

// import React from "react";
// import { Container, Row, Col, Navbar } from "react-bootstrap";
//
// const Footnote = () => {
//   return (
//     <footer className="bg-dark py-4">
//       <Container>
//         <Row>
//           <Col className="text-center my-4">
//             <Navbar.Brand>
//               Made by: <a href="https://www.douschesois.com/">Douschesois</a>
//             </Navbar.Brand>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center">
//             <Navbar.Text>Copyright &copy; 2021</Navbar.Text>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };
//
// export default Footnote;
