import styled from "styled-components";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AppText from "./AppText";
import colors from "../config/colors";

const Wrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
width: 100%;
// padding: 0 1rem;
`;

const Input = styled.input.attrs(props => ({
  value: props.value
}))`
background: ${({ background }) => background};
 width: 30px;
 border-radius: 5px;
  padding: 2px 4px;
  border: none;
  color: ${({ color }) => color}; 
`;

const CustomSlider = ({ title, value, onChange }) => {
  return (
    <Wrapper>
      <div style={{ width: '100%', marginLeft: '-0.1rem', display: 'flex', justifyContent: 'space-between' }}>
        <AppText style={{ fontSize: '14', color: colors.quaternary }}>{title}</AppText>
        <Input background={colors.primary} color={colors.quaternary} value={value} onChange={() => console.log("Value changed")}></Input>
      </div>
    <Box width={'100%'}>
      <Slider
        size="small"
        defaultValue={value}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={0.1}
        // marks
        min={0}
        max={10}
        onChange={(e, val) => console.log(val*16)}
        />
    </Box>
      </Wrapper>
  );
}

export default CustomSlider;