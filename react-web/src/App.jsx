import { useState } from 'react'
import topographyImage from './assets/mountain-topography.jpeg'

const projects = [
  { id: 'trail-atlas', number: '01', name: 'Trail Atlas', type: 'FIELD NOTES', year: '2024', description: 'A route-planning experience for collecting trail notes, conditions, and the details that never make it onto a map.', tags: ['React', 'Maps', 'UX'], position: { left: '20%', top: '39%' } },
  { id: 'basecamp', number: '02', name: 'Basecamp', type: 'COMMUNITY', year: '2024', description: 'A lightweight climbing journal for sharing conditions, lessons learned, and the next line worth trying.', tags: ['Product', 'Community', 'Design'], position: { left: '51%', top: '22%' } },
  { id: 'contour', number: '03', name: 'Contour', type: 'EXPERIMENT', year: '2023', description: 'An exploration of how elevation, weather, and time can shape a more human project dashboard.', tags: ['Data', 'Motion', 'Web'], position: { left: '77%', top: '43%' } },
]

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[1])

  return (
    // Top navigation buttons
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">
          JUNHAO<span>W3</span>
        </a>
        <div className="nav-links">
          <a href="#range">The range</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:wupillow@gmail.com">
            Say hello <span>↗</span>
          </a>
        </div>
      </nav>

      {/* // Topographical Map */}
      <section className="range-hero shell" id="top">
        <div className="range-intro">
          <p className="eyebrow">A PERSONAL PROJECT RANGE</p>
          <p className="range-subtitle">A topographical index of things I&apos;ve made, learned, and carried up the hill.</p>
        </div>
        <div className="topo-map" id="range" style={{ backgroundImage: `url(${topographyImage.src})` }} aria-label="Interactive topographical project map">
          <div className="map-grid"></div>
          <div className="map-ridge ridge-one"></div><div className="map-ridge ridge-two"></div><div className="map-ridge ridge-three"></div>
          <div className="peak-shape peak-left"></div><div className="peak-shape peak-center"></div><div className="peak-shape peak-right"></div>
          <div className="contour contour-one"></div><div className="contour contour-two"></div><div className="contour contour-three"></div>
          {projects.map(
            (project) => <button key={project.id}
              className={`peak-marker ${selectedProject.id === project.id ? 'selected' : ''}`}
              style={project.position} onClick={() => setSelectedProject(project)} 
              aria-label={`View ${project.name} project`}>
              <span className="marker-dot"></span><span className="marker-label">{project.number} / {project.name}</span></button>)}
          <span className="map-coordinate coordinate-one">01° 21′ N<br />103° 49′ E</span>
          <span className="map-coordinate coordinate-two">NORTH<br />RIDGE</span>
          <span className="map-scale">N ↑<br /><span>—— 5 km</span></span>
        </div>
        <div className="map-instruction"><span className="instruction-dot"></span> SELECT A SUMMIT TO EXPLORE</div>
      </section>

      <section className="project-detail shell" aria-live="polite">
        <div className="detail-index">{selectedProject.number}<span>/ 03</span></div>
        <div className="detail-content">
          <p className="eyebrow">{selectedProject.type} · {selectedProject.year}</p>
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.description}</p>
          <div className="tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <a className="text-link" href={`#${selectedProject.id}`}>View project <span>↗</span></a>
        </div>
        <div className="detail-ascent">
          <span>ASCENT LOG</span>
          <strong>{selectedProject.number === '01' ? '4,096' : selectedProject.number === '02' ? '5,895' : '6,189'} m</strong>
          <small>PROJECT ELEVATION</small>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-stamp">KEEP<br /><span>↑</span><br />GOING</div>
        <div className="about-copy">
          <p className="eyebrow">THE SHORT VERSION</p>
          <h2>Good work starts with<br /><em>paying attention.</em></h2>
          <p>I care about the small decisions: the words that make a button feel obvious, the rhythm that makes a page feel calm, and the details that help people find their way.</p>
          <a className="text-link" href="mailto:wupillow@gmail.com">Let&apos;s talk <span>↗</span></a>
        </div>
      </section>
      <footer className="footer shell"><span>© 2024 Junhao</span><span>Made between sea level and the summit.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
