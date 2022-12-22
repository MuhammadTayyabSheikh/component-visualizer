const reactBasicButton = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';

const Button = styled.button\`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor || 'white'};
  border-radius: ${props => props.radius || '3px'};
  padding: ${props => props.padding || '0.25em 1em'};
  border: ${props => props.borderWidth + ' ' + props.borderColor + ' solid'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
  \`;

const Icon = styled.div\`
  margin-right: ${props => props.iconMargin || '0.5em'};
\`;

const StyledButton = (props) => {
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

export default StyledButton;  
  `);
}

const reactBasicButtonCall = ({ styles }) => {
  return (`
<StyledButton
  {...StyledButtonStyles}
  icon={FaSave}
  iconSize="24px"
  iconColor={style.color}
>
  Save
</StyledButton>

const styles = StyleSheet.create({
  StyledButtonStyles: {
    
  }
});

  `);
}

const reactButton = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';

const Button = styled.button\`
  font-size: ${styles.fontSize};
  color: ${styles.color};
  background-color: ${styles.bgColor};
  border-radius: ${styles.radius};
  padding: ${styles.padding};
  border: ${styles.borderWidth + ' ' + styles.borderColor + ' solid'};
  width: ${styles.width};
  height: ${styles.height};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
\`;

const Icon = styled.div\`
  margin-right: ${styles.iconMargin};
\`;

const StyledButton = (props) => {
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

export default StyledButton;
`);
}

const reactBasicInputfield = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const InputContainer = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor || 'white'};
  border-radius: ${props => props.radius || '3px'};
  border: ${props => props.borderWidth + ' ' + props.borderColor + ' solid'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  \`;

const Input = styled.input\`
  flex: 1;
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || 'black'};
  padding: ${props => props.padding || '0.25em 1em'};
  ::placeholder {
  color: ${props => props.placeholderColor || 'gray'};
  font-size: ${props => props.placeholderFontSize || '1em'};
}
\`;

const IconContainer = styled.div\`
  width: ${props => props.iconSize || '40px'};
  height: ${props => props.iconSize || '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
\`;

const StyledInput = (props) => {
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

export default StyledInput;
`);
}

const reactInputfield = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const InputContainer = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${styles.bgColor};
  border-radius: ${styles.radius};
  border: ${styles.borderWidth + ' ' + styles.borderColor + ' solid'};
  width: ${styles.width};
  height: ${styles.height};
  \`;

const Input = styled.input\`
  flex: 1;
  font-size: ${styles.fontSize};
  color: ${styles.color};
  padding: ${styles.padding};
  ::placeholder {
  color: ${styles.placeholderColor};
  font-size: ${styles.placeholderFontSize};
}
\`;

const IconContainer = styled.div\`
  width: ${styles.iconSize || '40px'};
  height: ${styles.iconSize || '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
\`;

const StyledInput = (props) => {
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

export default StyledInput;
`);
}

const reactNativeBasicButton = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = styled(TouchableOpacity)\`
  font-size: ${props => props.fontSize || 20};
  color: ${props => props.color || 'black'};
  background-color: ${props => props.bgColor || 'white'};
  border-radius: ${props => props.radius || 3};
  padding: ${props => props.padding || '0.25em 1em'};
  border: ${props => props.borderWidth + ' ' + props.borderColor + ' solid'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
  \`;

const IconContainer = styled.View\`
  margin-right: ${props => props.iconMargin || '0.5em'};
\`;

const StyledButton = (props) => {
  return (
    <Button {...props}>
      {props.iconName && (
        <IconContainer iconMargin={props.iconMargin}>
          <Icon name={props.iconName} size={props.iconSize || 24} color={props.iconColor || 'black'} />
        </IconContainer>
      )}
      {props.children && <Text>{props.children}</Text>}
    </Button>
  );
};

export default StyledButton;
  `);
}

const reactNativeButton = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = styled.button\`
  font-size: ${styles.fontSize};
  color: ${styles.color};
  background-color: ${styles.bgColor};
  border-radius: ${styles.radius};
  padding: ${styles.padding};
  border: ${styles.borderWidth + ' ' + styles.borderColor + ' solid'};
  width: ${styles.width};
  height: ${styles.height};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
\`;

const Icon = styled.div\`
  margin-right: ${styles.iconMargin};
\`;

const StyledButton = (props) => {
  return (
    <Button>
      {props.iconName && (
        <IconContainer>
          <Icon name={props.iconName} size={props.iconSize || 24} color={props.iconColor || 'black'} />
        </IconContainer>
      )}
      {props.children && <Text>{props.children}</Text>}
    </Button>
  );
};

export default StyledButton;
`);
}

const reactNativeBasicInputField = ({ styles }) => {
  return (`
import React from 'react';
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputContainer = styled.View\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor || 'white'};
  border-radius: ${props => props.radius || 3};
  border: ${props => props.borderWidth + ' ' + props.borderColor + ' solid'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  \`;

const Input = styled(TextInput)\`
  flex: 1;
  font-size: ${props => props.fontSize || 20};
  color: ${props => props.color || 'black'};
  padding: ${props => props.padding || '0.25em 1em'};
  ::placeholder {
  color: ${props => props.placeholderColor || 'gray'};
  font-size: ${props => props.placeholderFontSize || 20};
}
\`;

const IconContainer = styled.View\`
  width: ${props => props.iconSize || 40};
  height: ${props => props.iconSize || 40};
  align-items: center;
  justify-content: center;
\`;

const StyledInput = (props) => {
  return (
    <InputContainer {...props}>
      {props.iconName && (
        <IconContainer iconSize={props.iconSize}>
          <Icon name={props.iconName} size={props.iconSize || 24} color={props.iconColor || 'gray'} />
        </IconContainer>
      )}
      <Input {...props} />
    </InputContainer>
  );
};

export default StyledInput;
  `);
}

const reactNativeInputField = ({ styles }) => {
  console.log("------------------|||||||||||||||||||||||||||||||||||||||||||||||||||", styles);
  return (`
import React from 'react';
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputContainer = styled.View\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${styles.bgColor};
  border-radius: ${styles.radius};
  border: ${styles.borderWidth + ' ' + styles.borderColor + ' solid'};
  width: ${styles.width || 'auto'};
  height: ${styles.height || 'auto'};
  \`;

const Input = styled(TextInput)\`
  flex: 1;
  font-size: ${styles.fontSize};
  color: ${styles.color};
  padding: ${styles.padding};
  ::placeholder {
    color: ${styles.placeholderColor};
    font-size: ${styles.placeholderFontSize};
  }
\`;

const IconContainer = styled.View\`
  width: ${styles.iconSize || 40};
  height: ${styles.iconSize || 40};
  align-items: center;
  justify-content: center;
\`;

const StyledInput = (props) => {
  return (
    <InputContainer {...props}>
      {props.iconName && (
        <IconContainer iconSize={props.iconSize}>
          <Icon name={props.iconName} size={props.iconSize || 24} color={props.iconColor || 'gray'} />
        </IconContainer>
      )}
      <Input {...props} />
    </InputContainer>
  );
};

export default StyledInput;
  `);
}

export default {
  reactBasicButton,
  reactBasicButtonCall,

  reactButton,


  reactBasicInputfield,


  reactInputfield,



  reactNativeBasicButton,


  reactNativeButton,


  reactNativeBasicInputField,


  reactNativeInputField,

};