import { useState } from "react";

function SkillsSection() {
    const [skills, setSkills] = useState("");

    const [isPersonalOpen, setIsPersonalOpen] = useState(false);
    return (
        <div className={`form-section ${isPersonalOpen ? "" : "collapsed"}`}>
        <div className="section-header" onClick={() => setIsPersonalOpen((prev) => !prev)}>
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
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
}

export default SkillsSection;