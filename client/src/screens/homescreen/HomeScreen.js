import React from "react";
import styled from "styled-components";
import TopSection from "./TopSection";

const HomeScreen = (props) => {
  return (
    <PageContainer>
      <TopSection />
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
