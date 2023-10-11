import React from 'react'
import MonacoEditor from 'react-monaco-editor';

const options = {
  autoIndent: 'full',
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 14,
  lineHeight: 18,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: false,
  },
  scrollbar: {
    // horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
}; 

export const MonacoEditorCode = React.forwardRef(({ isOpenHalfScreenModal, objectRawText }, ref) => {
  const [code, setCode] = React.useState(null)
  function handleEditorChange(value, event) {
    setCode(value)
  }

  React.useEffect(() => {
    if(isOpenHalfScreenModal) return
    setCode('')
  }, [isOpenHalfScreenModal])

  React.useEffect(() => {
    if(!objectRawText) return
    setCode(objectRawText)
  }, [objectRawText])

  React.useImperativeHandle(ref, () => {
    return {
      onUpdatebOject() {
        return code
      }
    }
  }, [code])

  return (
    <>
      
      <MonacoEditor 
       height="calc(100vh - 85px)" 
       defaultLanguage="javascript" 
       value={objectRawText}
       onChange={handleEditorChange}
       options={options}
      />
    </> 
    
  )
})
