import React from "react";
import styled from "styled-components";
import defaultStyles from "../config/styles";

const Text = styled.h4`
`;

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={{...defaultStyles.text, ...style}} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
