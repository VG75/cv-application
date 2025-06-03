import PersonalInfoSection from './formPanel/PersonalInfoSection'
import EducationSection from './formPanel/EducationSection'
import ExperienceSection from './formPanel/ExperienceSection'

function ResumeBuilder() {
    return (
        <div className="container">
  <div className="header">
    <h1>Professional Resume Builder</h1>
    <p>Create stunning resumes in minutes</p>
  </div>
  <div className="main-content">
    {/* Left Panel - Form */}
    <div className="form-panel">
      {/* Personal Information */}
      <PersonalInfoSection />
      {/* Education */}
      <EducationSection />
      {/* Experience */}
      <ExperienceSection />
      {/* Skills */}
      <div className="form-section collapsed">
        <div className="section-header" onClick="toggleSection(this)">
          <h3>
            <span className="section-icon">⚡</span>Skills
          </h3>
          <span className="collapse-icon">▼</span>
        </div>
        <div className="section-content">
          <div className="form-group">
            <label>Skills (comma separated)</label>
            <input
              type="text"
              id="skills"
              placeholder="JavaScript, React, Node.js, HTML, CSS"
            />
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="form-section collapsed">
        <div className="section-header" onClick="toggleSection(this)">
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
                <input type="text" placeholder="E-commerce Website" />
              </div>
              <div className="form-group">
                <label>Technologies Used</label>
                <input type="text" placeholder="React, Node.js, MongoDB" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Describe the project..."
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label>Project URL (optional)</label>
                <input
                  type="url"
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-secondary">
            + Add Project
          </button>
        </div>
      </div>
    </div>
    {/* Right Panel - Preview */}
    <div className="preview-panel">
      <div className="preview-actions">
        <button className="btn">📄 Download PDF</button>
        <button className="btn btn-secondary">💾 Save Resume</button>
      </div>
      {/* Resume Preview */}
      <div className="resume-preview">
        <div className="resume-header">
          <div className="resume-name">John Doe</div>
          <div className="resume-contact">
            john.doe@email.com • +1 (555) 123-4567 • New York, NY
          </div>
        </div>
        <div className="resume-body">
          <div className="resume-section">
            <h3>Professional Summary</h3>
            <div className="resume-item">
                <p>
                    Experienced software developer with 5+ years of experience in
                    full-stack development. Passionate about creating efficient,
                    scalable solutions and staying current with emerging technologies.
                </p>
            </div>
          </div>
          <div className="resume-section">
            <h3>Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior Software Developer</h4>
              <div className="company">Tech Solutions Inc.</div>
              <div className="date">January 2022 - Present</div>
              <p>
                Led development of web applications using React and Node.js.
                Improved application performance by 40% through code
                optimization and database query improvements.
              </p>
            </div>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <div className="company">StartUp Co.</div>
              <div className="date">June 2020 - December 2021</div>
              <p>
                Developed and maintained multiple client projects using various
                technologies. Collaborated with cross-functional teams to
                deliver high-quality solutions.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <div className="company">University of Technology</div>
              <div className="date">2016 - 2020</div>
            </div>
          </div>
          <div className="resume-section">
            <h3>Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">AWS</span>
            </div>
          </div>
          <div className="resume-section">
            <h3>Projects</h3>
            <div className="resume-item">
              <h4>E-commerce Platform</h4>
              <div className="company">React, Node.js, MongoDB</div>
              <p>
                Built a full-stack e-commerce application with payment
                integration, user authentication, and admin dashboard. Handled
                1000+ concurrent users.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Previous Resumes */}
      <div className="previous-resumes">
        <h3>📁 Saved Resumes</h3>
        <div className="resume-thumbnail">
          <h4>Software Developer Resume</h4>
          <p>Created: March 15, 2024</p>
          <div className="resume-thumbnail-actions">
            <button className="btn btn-sm">Edit</button>
            <button className="btn btn-sm btn-secondary">Download</button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
        <div className="resume-thumbnail">
          <h4>Frontend Developer Resume</h4>
          <p>Created: March 10, 2024</p>
          <div className="resume-thumbnail-actions">
            <button className="btn btn-sm">Edit</button>
            <button className="btn btn-sm btn-secondary">Download</button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default ResumeBuilder;