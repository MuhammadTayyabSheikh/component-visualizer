import React from 'react';
import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';

const Button = styled.button`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor || 'white'};
  border-radius: ${props => props.radius || '3px'};
  padding: ${props => props.padding || '0.25em 0.5em'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;

const Icon = styled.div`
  margin-right: ${props => props.iconMargin || '0.5em'};
`;

const CustomButton = (props) => {
  return (
    <Button {...props}>
      {props.icon && (
        <Icon iconMargin={props.iconMargin}>
          <props.icon size={props.iconSize || 24} color={props.iconColor || 'black'} />
        </Icon>
      )}
      {props.children}
    </Button>
  );
};

export default CustomButton;