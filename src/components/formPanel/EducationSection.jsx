import { useState } from "react";

function EducationSection() {

    const [education, setEducation] = useState({
        degree: '',
        school: '',
        startDate: '',
        endDate: ''
    });

    const [isEducationOpen, setIsEducationOpen] = useState(true);

    return (
        <div className={`form-section ${isEducationOpen ? '' : 'collapsed'}`}>
            <div className="section-header" onClick={() => setIsEducationOpen((prev) => !prev)}>
                <h3>
                    <span className="section-icon">🎓</span>Education
                </h3>
                <span className="collapse-icon">▼</span>
            </div>
            <div className="section-content">
            <div id="education-list">
            <div className="dynamic-section">
              <div className="form-group">
                <label>Degree</label>
                <input 
                type="text" 
                placeholder="Bachelor of Science"
                value={education.degree} />
              </div>
              <div className="form-group">
                <label>School/University</label>
                <input 
                type="text" 
                placeholder="University Name" 
                value={education.school} 
                onChange={(e) => setEducation({ ...education, school: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input 
                  type="month" 
                  value={education.startDate} 
                  onChange={(e) => setEducation({ ...education, startDate: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input 
                  type="month" 
                  value={education.endDate} 
                  onChange={(e) => setEducation({ ...education, endDate: e.target.value })} />
                </div>
              </div>
            </div>
            </div>
            <button type="button" className="btn btn-secondary">
                + Add Education
            </button>
            </div>
      </div>
      );
}

export default EducationSection