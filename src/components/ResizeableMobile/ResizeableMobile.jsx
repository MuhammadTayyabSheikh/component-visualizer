import React, { useRef, useEffect, useState } from "react";
import colors from "../../config/colors";
import "./styles.css";
import CustomColorPicker from '../CustomColorPicker'

function ResizeableMobile({ sidebarVisible, setSidebarVisible }) {
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  const [screenColor, setScreenColor] = useState(localStorage.getItem("screenColor") || '#fff');

  useEffect(() => {
    localStorage.setItem("screenColor", screenColor);
  }, [screenColor]);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(localStorage.getItem("mobileScreenWidth") || styles.width, 10);
    localStorage.setItem("mobileScreenWidth", width);
    resizeableEle.style.width = `${width}px`;
    let height = parseInt(localStorage.getItem("mobileScreenHeight") || styles.height, 10);
    resizeableEle.style.height = `${height}px`;
    localStorage.setItem("mobileScreenHeight", height);
    let x = 0;
    let y = 0;

    resizeableEle.style.top = "50px";
    resizeableEle.style.left = "50px";

    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      localStorage.setItem("mobileScreenWidth", width);
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top resize
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      localStorage.setItem("mobileScreenHeight", height);
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom resize
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      localStorage.setItem("mobileScreenHeight", height);
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Left resize
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      localStorage.setItem("mobileScreenWidth", width);
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Add mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <div style={{width: 'max-content', display: 'flex', flexDirection: 'column', gap: '0rem', jystifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div style={{ display:'flex', width: '100%', position: 'absolute', top: '10px', right: '-40px', justifyContent: 'space-between'}}>
        <button style={{ color: colors.tershary, cursor: 'pointer', paddingLeft: '15px' }} onClick={() => setSidebarVisible(!sidebarVisible)}>{sidebarVisible ? 'Close Editor' : 'Open Editor'}</button>
        <div >
        <CustomColorPicker value={screenColor} onChange={(val) => setScreenColor(val)} />
        </div>
      </div>
      {/* <div style={{ color: colors.quaternary }}> */}
        <div ref={ref} className="resizeable" style={{ background: screenColor }}>
          <div ref={refLeft} className="resizer resizer-l"></div>
          <div ref={refTop} className="resizer resizer-t"></div>
          <div ref={refRight} className="resizer resizer-r"></div>
          <div ref={refBottom} className="resizer resizer-b"></div>
          Component Will be Shown here!
        </div>
      {/* </div> */}
    </div>
  );
}

export default ResizeableMobile;