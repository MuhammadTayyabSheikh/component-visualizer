import styled from "styled-components";
import CustomSlider from "./CustomSlider";
import colors from "../config/colors";
import ColorPicker from "./CustomColorPicker";
import { useState } from "react";

const Wrapper = styled.div`
  background: ${({ color }) => color};
  width: 196px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 1rem 0 1rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  border-radius: 30px 0 0 30px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  
  transform: ${({ sidebarVisible }) => sidebarVisible ? 'translate(0px, 0px)' : 'translate(226px, 0px)'};
  transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
width: 100%;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-bottom: 40px;

  &::-webkit-scrollbar {
  display: none;
}
`

const SidebarEditor = ({ visible, setVisible }) => {
  const [color, setColor] = useState('#000000');
  const [value, setValue] = useState(10);
  return (
    <Wrapper sidebarVisible={visible} color={colors.secondary}>
      <div style={{ color: colors.quaternary, position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => setVisible()}>
        ✖
      </div>
      <Container>
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <ColorPicker value={color} onChange={(val) => setColor(val)} title='Color' />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title' value={value} onChange={(val) => setValue(val)} />
        <CustomSlider title='Title 13' value={value} onChange={(val) => setValue(val)} />
      </Container>
    </Wrapper >
  );
}

export default SidebarEditor;