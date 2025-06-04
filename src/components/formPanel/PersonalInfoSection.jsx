import { useState } from "react";

function PersonalInfoSection({personalInfo, updatePersonalInfo}) {

    
    const [isPersonalOpen, setIsPersonalOpen] = useState(true);

    return (
        <div className={`form-section ${isPersonalOpen ? '' : 'collapsed'}`}>
        <div className="section-header" onClick={() => setIsPersonalOpen((prev) => !prev)}>
          <h3>
            <span className="section-icon">👤</span>Personal Information
          </h3>
          <span className="collapse-icon">▼</span>
        </div>
        <div className="section-content">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={personalInfo.fullName}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, fullName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={personalInfo.email}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, email: e.target.value })}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 123-4567"
                value={personalInfo.phone}
                onChange={(e) => updatePersonalInfo({ ...personalInfo, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                id="location"
                placeholder="City, State"
                value={personalInfo.location}
                onChange={(e) => updatePersonalInfo({ ...personalInfo, location: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Professional Summary</label>
            <textarea
              id="summary"
              placeholder="Brief professional summary..."
              value={personalInfo.summary}
              onChange={(e) => updatePersonalInfo({ ...personalInfo, summary: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
}

export default PersonalInfoSection;