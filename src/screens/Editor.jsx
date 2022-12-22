import React, { useEffect, useState } from 'react'
import '../App.css'

import SidebarEditor from '../components/SidebarEditor'
import ResizeableMobile from '../components/ResizeableMobile/ResizeableMobile';
import CustomPopupModal from '../components/CustomPopupModal';
import CustomTextArea from './../components/CustomTextArea/CustomTextArea';
import generateCode from '../utilities/generateCode';
import CustomRadioButton from '../components/CustomRadioButton';

const Editor = () => {
  const [sidebarVisible, setSidebarVisible] = useState(!localStorage.getItem('sidebarVisible') ? true : JSON.parse(localStorage.getItem('sidebarVisible')));
  const [styles, setStyles] = useState(!localStorage.getItem('buttonStyles') ?
    {
      fontSize: '16px',
      color: '#000000',
      bgColor: '#2aa198',
      radius: '8px',
      padding: '5px',
      width: '80px',
      height: '30px',
      iconMargin: '10px',
      placeholderFontSize: '16px',
      borderColor: '#000000',
      borderWidth: '1px'
    }
    :
    JSON.parse(localStorage.getItem('buttonStyles')));

  const [inputFieldStyles, setInputFieldStyles] = useState(!localStorage.getItem('inputFieldStyles') ?
    {
      fontSize: '16px',
      color: '#00ffea',
      bgColor: '#ff0000',
      radius: '8px',
      padding: '5px',
      width: '200px',
      height: '30px',
      iconMargin: '10px',
      placeholderFontSize: '16px',
      placeholderColor: '#8f8e8e',
      borderColor: '#000000',
      borderWidth: '1px'
    }
    :
    JSON.parse(localStorage.getItem('inputFieldStyles')));

  // console.log(inputFieldStyles.bgColor)

  const [activeComponent, setActiveComponent] = useState(!localStorage.getItem('activeComponent') ? 'Please Select a component from components screen!' : localStorage.getItem('activeComponent'));
  const [selectedLanguage, setSelectedLanguage] = useState('React');
  const [selectedCodeversion, setSelectedCodeversion] = useState('Basic');

  const code = () => {
    if (activeComponent === '0') {
      if (selectedLanguage === 'React') {
        if (selectedCodeversion === 'Basic') {
          const codeIs = generateCode.reactBasicButton({styles});
          return codeIs;
        } else if (selectedCodeversion === 'Static') {
          const codeIs = generateCode.reactButton({styles});
          return codeIs;
        }
      } else if (selectedLanguage === 'React Native') {
        if (selectedCodeversion === 'Basic') {
          const codeIs = generateCode.reactNativeBasicButton({styles});
          return codeIs;
        } else if (selectedCodeversion === 'Static') {
          const codeIs = generateCode.reactNativeButton({styles});
          return codeIs;
        }
      }
    } else if(activeComponent === '1'){
      if (selectedLanguage === 'React') {
        if (selectedCodeversion === 'Basic') {
          const codeIs = generateCode.reactBasicInputfield({styles: inputFieldStyles});
          return codeIs;
        } else if (selectedCodeversion === 'Static') {
          const codeIs = generateCode.reactInputfield({ styles: inputFieldStyles });
          return codeIs;
        }
      } else if (selectedLanguage === 'React Native') {
        if (selectedCodeversion === 'Basic') {
          const codeIs = generateCode.reactNativeBasicInputField({ styles: inputFieldStyles });
          return codeIs;
        } else if (selectedCodeversion === 'Static') {
          const codeIs = generateCode.reactNativeInputField({ styles: inputFieldStyles });
          return codeIs;
        }
      }
    }
    return "No Code found!"
  }

  useEffect(() => {
    localStorage.setItem('buttonStyles', JSON.stringify(styles));
    localStorage.setItem('inputFieldStyles', JSON.stringify(inputFieldStyles));
  }, []);

  useEffect(() => {
    localStorage.setItem('buttonStyles', JSON.stringify(styles));
  }, [styles]);

  useEffect(() => {
    localStorage.setItem('inputFieldStyles', JSON.stringify(inputFieldStyles));
  }, [inputFieldStyles]);

  useEffect(() => {
    localStorage.setItem('sidebarVisible', sidebarVisible);
  }, [sidebarVisible]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
      <SidebarEditor visible={sidebarVisible} setVisible={() => setSidebarVisible(false)} styles={activeComponent === '0' ? styles : inputFieldStyles} setStyles={activeComponent === '0' ? setStyles : setInputFieldStyles} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CustomRadioButton value1='React' value2='React Native' selectedValue={selectedLanguage} setSelectedValue={setSelectedLanguage} />
            <CustomRadioButton value1='Basic' value2='Static' selectedValue={selectedCodeversion} setSelectedValue={setSelectedCodeversion} />
          </div>
          <CustomTextArea value={code()} height='70vh' width='50vw' />
        </div>
        <CustomTextArea value={generateCode.reactBasicButtonCall({styles})} height='23vh' width='50vw' />
      </div>
      <ResizeableMobile sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} styles={activeComponent === '0' ? styles : inputFieldStyles} setStyles={activeComponent === '0' ? setStyles : setInputFieldStyles} />
    </div>
  )
}
export default Editor;