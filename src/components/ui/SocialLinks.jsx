import { useState } from 'react'
import { socialLinks } from '../../data/social'
import Icon from './Icon'
export default function SocialLinks() {
  const [notice, setNotice] = useState('')
  return <><div className="social-links" aria-label="Social links">{[['github','GitHub'],['linkedin','LinkedIn'],['email','Email']].map(([key,label]) => <a key={key} href={socialLinks[key] ? (key === 'email' ? `mailto:${socialLinks[key]}` : socialLinks[key]) : '#contact'} aria-label={socialLinks[key] ? label : `${label} — account not added; view contact details`} onClick={() => !socialLinks[key] && setNotice(`${label} details have not been added yet.`)}>{key === 'email' ? <Icon name="mail"/> : <img src={`/icons/${key}.svg`} width="24" height="24" alt=""/>}</a>)}</div><p className="social-notice" role="status">{notice}</p></>
}
