import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/ext-language_tools";
import './CustomtextArea.css';

function CustomTextArea(props) {
  const editorRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => copied && setCopied(false), 1000);
  }, [copied])



  function handleCopyClick() {
    navigator.clipboard.writeText(props.value);
    setCopied(true);
  }

  return (
    <div className="custom-text-area">
      <AceEditor
        // id='editor'
        ref={editorRef}
        value={props.value}
        mode="javascript"
        theme="vibrant_ink"
        style={{ height: props.height, borderRadius: '0px 6px 6px 0px', backgroundColor: '#002b36', }}
        width={props.width}
        fontSize={13}
        showPrintMargin={false}
        // showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          // showLineNumbers: true,
          tabSize: 4,
        }}
      />
      <button className="custom-button">
        {copied ?
          <div >
            <FaCheck />
          </div>
          :
          <div onClick={handleCopyClick}>
            <FaCopy />
          </div>
        }
      </button>
    </div>
  );
}

export default CustomTextArea;  