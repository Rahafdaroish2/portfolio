import {useEffect, useRef} from 'react'
import Icon from './Icon'
export default function ProjectDialog({title,onClose,children}) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus() }
  }, [])
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}>
    <div className="dialog-content"><button autoFocus className="circle-button modal-close" onClick={onClose} aria-label="Close project details"><Icon name="close"/></button><h2 id="project-dialog-title">{title}</h2>{children}</div>
  </dialog>
}
