import {useState} from 'react';

function ProjectsSection({projects, updateProjects}) {

    const [isProjectsOpen, setProjectsOpen] = useState(false);
    return(
        <div className={`form-section ${isProjectsOpen ? '' : 'collapsed'}`}>
          <div className="section-header" onClick={() => setProjectsOpen((prev) => !prev)}>
            <h3>
              <span className="section-icon">🚀</span>Projects
            </h3>
            <span className="collapse-icon">▼</span>
          </div>
          <div className="section-content">
            <div id="projects-list">
              <div className="dynamic-section">
                <div className="form-group">
                  <label>Project Name</label>
                  <input 
                  type="text" 
                  placeholder="E-commerce Website"
                  value={projects.projectName}
                  onChange={(e) => updateProjects({ ...projects, projectName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Technologies Used</label>
                  <input 
                  type="text" 
                  placeholder="React, Node.js, MongoDB"
                  value={projects.technologiesUsed}
                  onChange={(e) => updateProjects({ ...projects, technologiesUsed: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    placeholder="Describe the project..."
                    defaultValue={projects.description}
                    onChange={(e) => updateProjects({ ...projects, description: e.target.value })}
                  />

                </div>
                <div className="form-group">
                  <label>Project URL (optional)</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username/project"
                    value={projects.projectURL}
                    onChange={(e) => updateProjects({ ...projects, projectURL: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-secondary">
              + Add Project
            </button>
          </div>
        </div>
    );
}

export default ProjectsSection;