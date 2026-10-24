import { useEffect, useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'
const links = ['Home','About','Projects','Skills','Services','Education','Contact']
export default function Navbar() {
  const [open,setOpen] = useState(false)
  const [active,setActive] = useState('home')
  useEffect(() => {
    const sections = links.map(label => document.getElementById(label.toLowerCase())).filter(Boolean)
    const update = () => {
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= 130)
      setActive(current?.id || 'home')
    }
    update()
    window.addEventListener('scroll', update, {passive:true})
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <header className="site-header"><nav className="container nav" aria-label="Main navigation">
    <a className="brand" href="#home" aria-label="Rahaf home">RA</a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="nav-links" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}>{open?'×':'☰'}</button>
    <div className={`nav-links ${open?'is-open':''}`} id="nav-links">{links.map(label=><a key={label} href={'#'+label.toLowerCase()} aria-current={active===label.toLowerCase()?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</div>
    <div className="nav-actions"><ThemeToggle/><a className="button primary small" href="#contact">Let’s Connect ↗</a></div>
  </nav></header>
}
