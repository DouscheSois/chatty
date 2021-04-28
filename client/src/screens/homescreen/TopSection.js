import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import BackgroundImg from "../../assets/images/video-placeholder.jpg";
import Button from "../../components/Button";
import DownArrow from "../../components/DownArrow";
import Logo from "../../components/Logo";
import Marginer from "../../components/Marginer";

const TopSection = (props) => {
  const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    position: relative;
  `;

  const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.89);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const MotivationalText = styled.h1`
    font-size: 34px;
    font-weight: 500;
    line-height: 1.4;
    color: #fff;
    margin: 0;
    text-align: center;
  `;

  const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  `;

  const scrollToNextSection = () => {
    scroller.scrollTo("serviceSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Crypto Talk</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <MotivationalText>Under Reconstruction</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start Mining Topics</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
};

export default TopSection;
