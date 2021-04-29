import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Marginer from "../../components/Marginer";
import OurService from "../../components/OurService";
import SectionTitle from "../../components/SectionTitle";

import Service1Img from "../../assets/images/features-split-image-01.png";
import Service2Img from "../../assets/images/features-split-image-01.png";
import Service3Img from "../../assets/images/features-split-image-01.png";

const ServicesSection = (props) => {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
        with customized control panels that fit your
        compnay needs"
        imgUrl={Service1Img}
      />
      <OurService
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
        with customized control panels that fit your
        compnay needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurService
        title="Quality is our priority"
        description="We have teams of professional developers, designers
      and managers that ensures delivering the best
      software quality for your company"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
};

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export default ServicesSection;
