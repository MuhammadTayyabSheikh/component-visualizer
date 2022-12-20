import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor || 'white'};
  padding: ${props => props.padding || '0.25rem'};
  border-radius: ${props => props.radius || '3px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

const Input = styled.input`
  flex: 1;
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || 'black'};
  padding: ${props => props.padding || '0.25rem'};
  width: ${props => props.width || '100%'};
  ::placeholder {
    color: ${props => props.placeholderColor || 'gray'};
    font-size: ${props => props.placeholderFontSize || '0.875rem'};
  }
`;

const IconContainer = styled.div`
  width: ${props => props.iconSize || '40px'};
  height: ${props => props.iconSize || '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomInputField = (props) => {
  return (
    <InputContainer {...props}>
      {props.icon && (
        <IconContainer iconSize={props.iconSize}>
          <props.icon size={props.iconSize || 24} color={props.iconColor || 'gray'} />
        </IconContainer>
      )}
      <Input {...props} />
    </InputContainer>
  );
};

export default CustomInputField;