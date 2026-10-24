import {useState} from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import ProjectDialog from '../components/ui/ProjectDialog'
import ProjectVisual from '../components/ui/ProjectVisual'
import {projects} from '../data/projects'
export default function Projects() {
  const [view,setView] = useState(null)
  const selected = projects.find(project=>project.id===view)
  return <section id="projects" className="section projects"><div className="container"><div className="section-top"><SectionHeading eyebrow="Featured projects" title="My Work"/><button className="text-link" onClick={()=>setView('all')}>View All Projects <span aria-hidden="true">→</span></button></div>
    <div className="projects-grid">{projects.map((project,index)=><ProjectCard key={project.id} project={project} index={index} onSelect={project=>setView(project.id)}/>)}</div>
    <p className="project-caption">Interface illustrations · Full-Stack Web App is a concept project.</p>
  </div>{view && <ProjectDialog key={view} title={selected?selected.title:'All Projects'} onClose={()=>setView(null)}>
    {selected ? <><ProjectVisual project={selected} index={projects.indexOf(selected)} detail/><p className="project-type">{selected.type}</p><p>{selected.description}</p><div className="tags">{selected.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-links">{selected.liveUrl&&<a className="text-link" href={selected.liveUrl} target="_blank" rel="noreferrer">View Live ↗</a>}{selected.sourceUrl&&<a className="text-link" href={selected.sourceUrl} target="_blank" rel="noreferrer">Source Code ↗</a>}</div>{!selected.liveUrl&&!selected.sourceUrl&&<p className="subtle">Live and source links have not been provided yet.</p>}<a className="button primary" href="#contact" onClick={()=>setView(null)}>Discuss a project →</a></> : <><p className="subtle">All {projects.length} currently listed projects</p><div className="all-projects-grid">{projects.map((project,index)=><ProjectCard key={project.id} project={project} index={index} onSelect={project=>setView(project.id)}/>)}</div></>}
  </ProjectDialog>}</section>
}
