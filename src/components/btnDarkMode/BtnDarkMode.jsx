import { useState, useEffect, useRef } from "react"
import sun from "../btnDarkMode/sun.svg"
import moon from "../btnDarkMode/moon.svg"

import './style.css'

function BtnDarkMode() {

  const [darkMode, setDarkMode] = useState('Light');
  const btnRef = useRef(null);
  useEffect(() => {

    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'Light' ? 'dark' : 'Light';
    });
  }
  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode
