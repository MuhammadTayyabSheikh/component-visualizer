import React, { useState } from 'react'
import SidebarEditor from '../components/SidebarEditor'
import '../App.css'
import ResizeableMobile from '../components/ResizeableMobile/ResizeableMobile';
import colors from '../config/colors';

const Editor = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div >
      <button style={{color: colors.quaternary, cursor: 'pointer'}} onClick={() => setSidebarVisible(!sidebarVisible)}>Open Editor</button>
      <SidebarEditor visible={sidebarVisible} setVisible={() => setSidebarVisible(false)} />
      <ResizeableMobile visible={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
    </div>
  )
}

export default Editor