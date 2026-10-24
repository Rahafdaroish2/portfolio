export default function ProjectVisual({project,index,detail=false}) {
  if (project.image) return <img className="project-image" src={project.image} alt={`${project.title} screenshot`}/>
  return <div className={`project-visual visual-${index} ${detail?'detail-visual':''}`} role="img" aria-label={`${project.title}: illustrative interface, not a project screenshot`}>
    <span className="project-number">0{index+1}</span>
    <div className="mockup"><div className="mockup-top">● ● ● <span>{project.type}</span></div><div className="mockup-body"><div className="mockup-sidebar"/><div className="mockup-main"><div className="mockup-line"/><div className="mockup-stats"><i/><i/><i/></div><div className="mockup-chart"><i/><i/><i/><i/><i/><i/><i/></div></div></div></div>
  </div>
}
