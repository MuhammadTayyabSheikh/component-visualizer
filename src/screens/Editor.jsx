import React, { useState } from 'react'
import SidebarEditor from '../components/SidebarEditor'
import '../App.css'

const Editor = () => {
  const [sidebarVisible, setSidebarVisible] = useState(0);
  return (
    <div >
      {/* <button  onClick={() => setSidebarVisible(true)}>X</button> */}
      <SidebarEditor visible={true} setVisible={() => setSidebarVisible(false)} />
    </div>
  )
}

export default Editor