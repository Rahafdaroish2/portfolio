import SectionHeading from '../components/ui/SectionHeading'
const skills = [['HTML','html5'],['CSS','css3'],['JavaScript','javascript'],['React','react'],['Node.js','nodejs'],['Express.js','express'],['MongoDB','mongodb'],['Git','git']]
export default function Skills() {
  return <section id="skills" className="section skills"><div className="container skills-layout">
    <SectionHeading eyebrow="Skills" title={<>Tools & Technologies<br/>I Work With</>}/>
    <div className="skills-grid">{skills.map(([name,icon])=><div className="skill" key={name}><img src={`/icons/${icon}.svg`} width="36" height="36" alt=""/><p>{name}</p></div>)}</div>
  </div></section>
}
