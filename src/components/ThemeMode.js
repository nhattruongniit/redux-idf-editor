import React from 'react'

// components
import IconSimple from './IconSimple'

function ThemeMode() {
  const [theme, setTheme] = React.useState('light')

  function handleTheme() {
    document.getElementById('html').classList.toggle('dark');
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div onClick={handleTheme}>
      {theme === 'light' ? (
        <IconSimple icon="iconamoon:mode-dark"  />
      ) : (
        <IconSimple icon="iconoir:sun-light" />
      )}
      
    </div>
  )
}

export default ThemeMode