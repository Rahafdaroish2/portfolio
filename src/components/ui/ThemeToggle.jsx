import { useEffect, useState } from 'react'
import Icon from './Icon'
export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('rahaf-theme') === 'dark' } catch { return false }
  })
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  function toggle() {
    const next = !dark
    setDark(next)
    try { localStorage.setItem('rahaf-theme', next ? 'dark' : 'light') } catch { /* Theme remains usable without storage. */ }
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle dark theme" aria-pressed={dark}>
    <span className={!dark ? 'is-selected' : ''}><Icon name="sun"/></span>
    <span className={dark ? 'is-selected' : ''}><Icon name="moon"/></span>
  </button>
}
