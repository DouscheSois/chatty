import React from "react";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { Element } from "react-scroll";
import styled from "styled-components";
import Marginer from "../../components/Marginer";
import ReviewCard from "../../components/ReviewCard";
import SectionTitle from "../../components/SectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/images/profile_picture_1.jpg";
import User2Img from "../../assets/images/profile_picture_2.jpg";
import User3Img from "../../assets/images/profile_picture_3.jpg";
import User4Img from "../../assets/images/profile_picture_4.jpeg";

const ReviewsSection = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <ReviewsContainer>
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText="I know what is like to jump!"
              username="John Doe"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText="I use the dark to enter buildings"
              username="Mac Kregon"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText="Bitcoin is good, ethereum is good too!"
              username="Batista"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText="It doesnt matter all will go up!"
              username="Mike Jones"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export default ReviewsSection;
