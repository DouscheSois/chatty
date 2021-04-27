import React from "react";
import styled from "styled-components/macro";

const Marginer = (props) => {
  const { direction } = props;
  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
};

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;
