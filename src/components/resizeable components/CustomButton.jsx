import React from 'react';
import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';

const Button = styled.button`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || '#000'};
  background-color: ${props => props.bgColor || '#fff'};
  border-radius: ${props => props.radius || '3px'};
  padding: ${props => props.padding || '0.5em 0.5em'};
  border: ${props => props.borderWidth + ' ' + props.borderColor + ' solid'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-width: min-content;
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