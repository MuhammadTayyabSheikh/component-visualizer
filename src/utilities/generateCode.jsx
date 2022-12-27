const reactBasicButton = ({ styles }) => {
  return (`import React from 'react';
import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';

const Button = styled.button\`
  font-size: \$\{${props => props.fontSize || '16px'}\};
  color: \$\{${props => props.color || '#000000'}\};
  background-color: \$\{${props => props.bgColor || '#ffffff'}\};
  border-radius: \$\{${props => props.radius || '3px'}\};
  padding: \$\{${props => props.padding || '4px 16px'}\};
  border: \$\{${props => (props.borderWidth + ' ' + props.borderColor + ' solid') || '1px solid #000000'}\};
  width: \$\{${props => props.width || 'auto'}\};
  height: \$\{${props => props.height || 'auto'}\};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
  \`;

const Icon = styled.div\`
  margin-right: \$\{${props => props.iconMargin || '8px'}\};
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
  return (`import styled from 'styled-components';
import { FaCopy } from 'react-icons/fa';
import StyledButton from '../components/StyledButton'

const SubmitButton = styled.StyledButton\`
  ${styles.fontSize !== '16px' ? 'font-size: ' + styles.fontSize + ";" : ''}
  ${styles.color !== '#000000' ? 'color: ' + styles.color + ";" : ''}
  ${styles.bgColor !== '#ffffff' ? 'background-color: ' + styles.bgColor + ";" : ''}
  ${styles.radius !== '#ffffff' ? 'border-radius: ' + styles.radius + ";" : ''}
  ${styles.padding !== '4px 16px' ? 'padding: ' + styles.padding + ";" : ''}
  ${(styles.borderWidth !== '1px' || styles.borderColor !== '#000000') ? 'border: ' + styles.borderWidth + ' ' + styles.borderColor + ' solid' + ";" : ''}
  ${styles.width !== 'auto' ? 'width: ' + styles.width + ";" : ''}
  ${styles.height !== 'auto' ? 'height: ' + styles.height + ";" : ''}
\`;

//Component call
<SubmitButton
  icon={FaCopy}  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const reactButton = ({ styles }) => {
  return (`import React from 'react';
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

const reactButtonCall = ({ styles }) => {
  return (`import { FaCopy } from 'react-icons/fa';
<StyledButton
  icon={FaCopy}  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const reactBasicInputfield = ({ styles }) => {
  return (`import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const InputContainer = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: \$\{${props => props.bgColor || 'white'}\};
  border-radius: \$\{${props => props.radius || '3px'}\};
  border: \$\{${props => props.borderWidth + ' ' + props.borderColor + ' solid'}\};
  width: \$\{${props => props.width || 'auto'}\};
  height: \$\{${props => props.height || 'auto'}\};
  \`;

const Input = styled.input\`
  flex: 1;
  font-size: \$\{${props => props.fontSize || '16px'}\};
  color: \$\{${props => props.color || 'black'}\};
  padding: \$\{${props => props.padding || '4px 16px'}\};
  ::placeholder {
  color: \$\{${props => props.placeholderColor || 'gray'}\};
  font-size: \$\{${props => props.placeholderFontSize || '16px'}\};
}
\`;

const IconContainer = styled.div\`
  width: \$\{${props => props.iconSize || '40px'}\};
  height: \$\{${props => props.iconSize || '40px'}\};
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

const reactBasicInputfieldCall = ({ styles }) => {
  return (`import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import StyledButton from '../components/StyledButton'

const SubmitButton = styled.StyledButton\`
  ${styles.fontSize !== '16px' ? 'font-size: ' + styles.fontSize + ";" : ''}
  ${styles.color !== '#000000' ? 'color: ' + styles.color + ";" : ''}
  ${styles.bgColor !== '#ffffff' ? 'background-color: ' + styles.bgColor + ";" : ''}
  ${styles.radius !== '#ffffff' ? 'border-radius: ' + styles.radius + ";" : ''}
  ${styles.padding !== '4px 16px' ? 'padding: ' + styles.padding + ";" : ''}
  ${(styles.borderWidth !== '1px' || styles.borderColor !== '#000000') ? 'border: ' + styles.borderWidth + ' ' + styles.borderColor + ' solid' + ";" : ''}
  ${styles.width !== 'auto' ? 'width: ' + styles.width + ";" : ''}
  ${styles.height !== 'auto' ? 'height: ' + styles.height + ";" : ''}
\`;

//Component call
<SubmitButton
  icon={FaUser}  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
};

const reactInputfield = ({ styles }) => {
  return (`import React from 'react';
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

const reactInputfieldCall = ({ styles }) => {
  return (`import { FaUser } from 'react-icons/fa';
<StyledInput
  icon={FaUser}  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const reactNativeBasicButton = ({ styles }) => {
  return (`import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = styled(TouchableOpacity)\`
  font-size: \$\{${props => props.fontSize || 20}\};
  color: \$\{${props => props.color || 'black'}\};
  background-color: \$\{${props => props.bgColor || 'white'}\};
  border-radius: \$\{${props => props.radius || 3}\};
  padding: \$\{${props => props.padding || '4px 16px'}\};
  border: \$\{${props => props.borderWidth + ' ' + props.borderColor + ' solid'}\};
  width: \$\{${props => props.width || 'auto'}\};
  height: \$\{${props => props.height || 'auto'}\};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  cursor: pointer;
  \`;

const IconContainer = styled.View\`
  margin-right: \$\{${props => props.iconMargin || '8px'}\};
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

const reactNativeBasicButtonCall = ({ styles }) => {
  return (`import styled from 'styled-components';
import StyledButton from '../components/StyledButton;'

const SubmitButton = styled.StyledButton\`
  ${styles.fontSize !== '16px' ? 'font-size: ' + styles.fontSize + ";" : ''}
  ${styles.color !== '#000000' ? 'color: ' + styles.color + ";" : ''}
  ${styles.bgColor !== '#ffffff' ? 'background-color: ' + styles.bgColor + ";" : ''}
  ${styles.radius !== '#ffffff' ? 'border-radius: ' + styles.radius + ";" : ''}
  ${styles.padding !== '4px 16px' ? 'padding: ' + styles.padding + ";" : ''}
  ${(styles.borderWidth !== '1px' || styles.borderColor !== '#000000') ? 'border: ' + styles.borderWidth + ' ' + styles.borderColor + ' solid' + ";" : ''}
  ${styles.width !== 'auto' ? 'width: ' + styles.width + ";" : ''}
  ${styles.height !== 'auto' ? 'height: ' + styles.height + ";" : ''}
\`;

//Component call
<SubmitButton
  icon='user'  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const reactNativeButton = ({ styles }) => {
  return (`import React from 'react';
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

const reactNativeButtonCall = ({ styles }) => {
  return (`<StyledButton
  iconName='alarm-outline'
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const reactNativeBasicInputField = ({ styles }) => {
  return (`import React from 'react';
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputContainer = styled.View\`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: \$\{${props => props.bgColor || 'white'}\};
  border-radius: \$\{${props => props.radius || 3}\};
  border: \$\{${props => props.borderWidth + ' ' + props.borderColor + ' solid'}\};
  width: \$\{${props => props.width || 'auto'}\};
  height: \$\{${props => props.height || 'auto'}\};
  \`;

const Input = styled(TextInput)\`
  flex: 1;
  font-size: \$\{${props => props.fontSize || 20}\};
  color: \$\{${props => props.color || 'black'}\};
  padding: \$\{${props => props.padding || '4px 16px'}\};
  ::placeholder {
  color: \$\{${props => props.placeholderColor || 'gray'}\};
  font-size: \$\{${props => props.placeholderFontSize || 20}\};
}
\`;

const IconContainer = styled.View\`
  width: \$\{${props => props.iconSize || 40}\};
  height: \$\{${props => props.iconSize || 40}\};
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
  return (`import React from 'react';
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

const reactNativeInputfieldCall = ({ styles }) => {
  return (`<StyledInput
  icon='person'  
  iconSize={${styles.iconSize}}
  iconColor={${styles.iconColor}}
/>
  `);
}

const smallBasic = () => {
  return `
           \n\n\n\n                                      Underdevelopment
  `
}

export default {
  reactBasicButton,
  reactBasicButtonCall,

  reactButton,
  reactButtonCall,

  reactBasicInputfield,

  reactInputfield,
  reactInputfieldCall,

  reactNativeBasicButton,
  reactNativeBasicButtonCall,

  reactNativeButton,
  reactNativeButtonCall,

  reactNativeBasicInputField,

  reactNativeInputField,
  reactNativeInputfieldCall,

  smallBasic
};