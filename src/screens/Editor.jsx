import React, { useEffect, useState } from 'react'
import '../App.css'

import SidebarEditor from '../components/SidebarEditor'
import ResizeableMobile from '../components/ResizeableMobile/ResizeableMobile';
import CustomPopupModal from '../components/CustomPopupModal';

const Editor = () => {
  const [sidebarVisible, setSidebarVisible] = useState(!localStorage.getItem('sidebarVisible') ? true : JSON.parse(localStorage.getItem('sidebarVisible')));

  useEffect(() => {
    localStorage.setItem('sidebarVisible', sidebarVisible);
  }, [sidebarVisible]);

  return (
    <div style={{ height: 'fit-content', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column-reverse', position: 'relative' }}>
      <SidebarEditor visible={sidebarVisible} setVisible={() => setSidebarVisible(false)} />
      <ResizeableMobile sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
      <CustomPopupModal />
    </div>
  )
}
export default Editor