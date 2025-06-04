import { useState } from "react";

function ExperienceSection({experiences, updateExperience}) {

   

    const [isExperienceOpen, setExperienceOpen] = useState(false);
    
    return (
        <div className={`form-section ${isExperienceOpen ? '' : 'collapsed'}`}>
        <div className="section-header" onClick={() => setExperienceOpen((prev) => !prev)}>
          <h3>
            <span className="section-icon">💼</span>Professional Experience
          </h3>
          <span className="collapse-icon">▼</span>
        </div>
        <div className="section-content">
          <div id="experience-list">
            <div className="dynamic-section">
              <div className="form-group">
                <label>Job Title</label>
                <input 
                type="text" 
                placeholder="Software Developer"
                value={experiences.jobTitle}
                onChange={(e) => updateExperience({ ...experiences, jobTitle: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" 
                placeholder="Company Name"
                value={experiences.company}
                onChange={(e) => updateExperience({ ...experiences, company: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="month" 
                  value={experiences.startDate}
                  onChange={(e) => updateExperience({ ...experiences, startDate: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="month"
                  value={experiences.endDate}
                  onChange={(e) => updateExperience({ ...experiences, endDate: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Describe your responsibilities and achievements..."
                  value={experiences.description}
                  onChange={(e) => updateExperience({ ...experiences, description: e.target.value })}
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-secondary">
            + Add Experience
          </button>
        </div>
      </div>
    );
}

export default ExperienceSection;