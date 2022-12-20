import React, { useEffect, useState } from 'react'
import '../App.css'

import SidebarEditor from '../components/SidebarEditor'
import ResizeableMobile from '../components/ResizeableMobile/ResizeableMobile';
import CustomPopupModal from '../components/CustomPopupModal';

const Editor = () => {
  const [sidebarVisible, setSidebarVisible] = useState(!localStorage.getItem('sidebarVisible') ? true : JSON.parse(localStorage.getItem('sidebarVisible')));
  const [styles, setStyles] = useState(!localStorage.getItem('componentStyles') ?
    {
      fontSize: '16',
      color: '#000000',
      bgColor: '#2aa198',
      radius: '8px',
      padding: '5px',
      width: '80px',
      height: '30px',
      iconMargin: '10px',
      placeholderFontSize: '16px',
      placeholderColor: '#8f8e8e',
    }
    :
    JSON.parse(localStorage.getItem('componentStyles')));


    // setStyles({...styles, fontSize: '3.25rem', color: 'white', bgColor: 'mediumseagreen', radius: '5px', padding: '0.5rem 0.5rem', width: '200px', height: '50px', iconMargin: '0.5rem',})

  useEffect(() => {
    localStorage.setItem('componentStyles', JSON.stringify(styles));
  }, []);

  useEffect(() => {
    localStorage.setItem('componentStyles', JSON.stringify(styles));
  }, [styles]);

  useEffect(() => {
    localStorage.setItem('sidebarVisible', sidebarVisible);
  }, [sidebarVisible]);

  return (
    <div style={{ height: 'fit-content', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column-reverse', position: 'relative' }}>
      <SidebarEditor visible={sidebarVisible} setVisible={() => setSidebarVisible(false)} styles={styles} setStyles={setStyles} />
      <ResizeableMobile sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} styles={styles} setStyles={setStyles} />
    </div>
  )
}
export default Editor