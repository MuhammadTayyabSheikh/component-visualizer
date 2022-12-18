import styled from "styled-components";
import Box from '@mui/material/Box';
import ControlledSlider from '@mui/material/Slider';
import AppText from "./AppText";
import colors from "../config/colors";

const Wrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
width: 100%;
`;

const Input = styled.input.attrs(props => ({
  value: props.value,
  maximum: 500
}))`
background: ${({ background }) => background};
 width: 45px;
 border-radius: 5px;
  padding: 4px;
  border: none;
  color: ${({ color }) => color}; 
  font-size: 14px;
`;

const CustomSlider = ({ title, value, onChange }) => {
  return (
    <Wrapper>
      <div style={{ width: '100%', marginLeft: '-0.1rem', display: 'flex', justifyContent: 'space-between' }}>
        <AppText style={{ fontSize: '14', color: colors.quaternary }}>{title}</AppText>
        <Input background={colors.primary} color={colors.light} value={value} onChange={(e) => onChange(e.target.value)}></Input>
      </div>
      <Box width={'100%'}>
        <ControlledSlider
          size="small"
          // defaultValue={value}
          value={value}
          valueLabelDisplay="auto"
          step={0.1}
          // marks
          min={0}
          max={500}
          onChange={(e, val) => onChange(val)}
        />
      </Box>
    </Wrapper>
  );
}

export default CustomSlider;