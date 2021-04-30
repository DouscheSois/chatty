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
      <SectionTitle>Chatty Insights</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully Integrated Software"
        description="The Chatty team have built a secure and private platform where crypto maniacs can freely express themselves."
        imgUrl={Service1Img}
      />
      <OurService
        title="About Us"
        description="The Chatty team was assembled to stay sharp with modern day technology. We believe in crypto and have a vision for the future, we are simply adapting."
        imgUrl={Service2Img}
        isReversed
      />
      <OurService
        title="Focus and Goal"
        description="The Chatty team is focused on quality and satisfactory user experience. Our goal is to be a competitive crypto talk platform.  "
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
