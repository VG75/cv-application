import PersonalInfoSection from './formPanel/PersonalInfoSection'
import EducationSection from './formPanel/EducationSection'
import ExperienceSection from './formPanel/ExperienceSection'
import SkillsSection from './formPanel/SkillsSection'
import ProjectsSection from './formPanel/ProjectsSection'
import  PreviewPanel from './previewPanel/previewPanel.jsx'
import {useState} from 'react';

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    
    // You can later add education, experience, etc.
  });

  const updatePersonalInfo = (newInfo) => {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: newInfo,
    }));
  };

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
              <PersonalInfoSection
                personalInfo={resumeData.personalInfo}
                updatePersonalInfo={updatePersonalInfo}
              />
              {/* Education */}
              <EducationSection />
              {/* Experience */}
              <ExperienceSection />
              {/* Skills */}
              <SkillsSection />
              {/* Projects */}
              <ProjectsSection />
            </div>
            {/* Right Panel - Preview */}
            <div className="preview-panel">
              <div className="preview-actions">
                <button className="btn">📄 Download PDF</button>
                <button className="btn btn-secondary">💾 Save Resume</button>
              </div>
              {/* Resume Preview */}
              <PreviewPanel resumeData={resumeData} />
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