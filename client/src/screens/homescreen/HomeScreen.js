import React from "react";
import styled from "styled-components";
import Marginer from "../../components/Marginer";
import TopSection from "./TopSection";
import ReviewsSection from "./ReviewsSection";
import ServicesSection from "./ServicesSection";

const HomeScreen = (props) => {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default HomeScreen;
