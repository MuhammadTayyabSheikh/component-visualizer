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

const SidebarEditor = ({ visible, setVisible, styles, setStyles }) => {
  const [color, setColor] = useState('#000000');
  const [value, setValue] = useState(10);
  console.log(styles.color)
  return (
    <Wrapper sidebarVisible={visible} color={colors.secondary}>
      <div style={{ color: colors.quaternary, position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => setVisible()}>
        ✖
      </div>


      <Container>
        <ColorPicker title='Color' value={styles.color} onChange={(val) => { setStyles({ ...styles, color: val }); console.log(val) }} />
        <ColorPicker title='Bg Color' value={styles.bgColor} onChange={(val) => setStyles({ ...styles, bgColor: val })} />
        <ColorPicker title='Placeholder Color' value={styles.placeholderColor} onChange={(val) => setStyles({ ...styles, placeholderColor: val })} />
        <CustomSlider title='Width' value={styles.width.slice(0, -2)} onChange={(val) => setStyles({ ...styles, width: val + 'px' })} />
        <CustomSlider title='Height' value={styles.height.slice(0, -2)} onChange={(val) => setStyles({ ...styles, height: val + 'px' })} />
        <CustomSlider title='Padding' value={styles.padding.slice(0, -2)} onChange={(val) => setStyles({ ...styles, padding: val + 'px' })} />
        <CustomSlider title='Font Size' value={styles.fontSize.slice(0, -2)} onChange={(val) => setStyles({ ...styles, fontSize: val + 'px' })} />
        <CustomSlider title='Radius' value={styles.radius.slice(0, -2)} onChange={(val) => setStyles({ ...styles, radius: val + 'px' })} />
        <CustomSlider title='Icon Margin' value={styles.iconMargin.slice(0, -2)} onChange={(val) => setStyles({ ...styles, iconMargin: val + 'px' })} />
        <CustomSlider title='Placeholder Font Size' value={styles.placeholderFontSize.slice(0, -2)} onChange={(val) => setStyles({ ...styles, placeholderFontSize: val + 'px' })} />

        {/* <CustomSlider title='Title' value={value} onChange={(val) => setStyles(val)} /> */}
        {/* <CustomSlider title='Title' value={value} onChange={(val) => setStyles(val)} /> */}
        {/* <CustomSlider title='Title' value={value} onChange={(val) => setStyles(val)} /> */}
        {/* <CustomSlider title='Title' value={value} onChange={(val) => setStyles(val)} /> */}
        {/* <CustomSlider title='Title 13' value={value} onChange={(val) => setStyles(val)} /> */}
      </Container>
    </Wrapper >
  );
}

export default SidebarEditor;