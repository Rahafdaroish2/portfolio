import Icon from './Icon'
import ProjectVisual from './ProjectVisual'
export default function ProjectCard({project,index,onSelect}) {
  return <article className="project-card"><ProjectVisual project={project} index={index}/><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="card-bottom"><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><button className="circle-button" onClick={()=>onSelect(project)} aria-label={`Read about ${project.title}`}><Icon name="arrow"/></button></div></div></article>
}
