import { color } from "@mui/system";
import styled from "styled-components";
import colors from "../config/colors";
import AppText from "./AppText";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // gap: 2rem;
  margin-bottom: 1rem;

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    border-radius: 5px;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
}
`;

const ColorInput = styled.input.attrs(props => ({
  type: 'color',
  value: props.value


}))`
width: 100%;
height: 100%;
cursor: pointer;
  // visibility: hidden;
`;

const Label = styled.label`
  background-color: ${({ background }) => background};
  background-color: black;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  overflow: hidden;
  padding: 0;
`;

const Input = styled.input.attrs(props => ({
  value: props.value
}))`
background: ${({ background }) => background};
 width: 47px;
 border-radius: 5px;
  padding: 4px 4px;
  border: none;
  font-size: 12px;
  color: ${({ color }) => color}; 
`;

function CustomColorPicker({ title, value, onChange }) {
  return (
    <Wrapper>
      <AppText style={{ fontSize: '14', color: colors.quaternary }}>{title}</AppText>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
        <Label background={color}>
          <ColorInput value={value} onChange={(e) => { onChange(e.target.value); console.log('COLOR INPUT---------------------', e.target.value)}} />
        </Label>
        <Input background={colors.primary} color={colors.light} value={value} onChange={(e) => onChange(e.target.value)}></Input>
      </div>
    </Wrapper>
  )
}

export default CustomColorPicker
