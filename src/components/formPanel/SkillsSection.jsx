import { useState } from "react";

function SkillsSection({skills, updateSkills}) {
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);
    const [skillsInput, setSkillsInput] = useState(skills.join(', '));
    
    const handleSkillsChange = (e) => {
        const value = e.target.value;
        setSkillsInput(value);
    };
    
    const handleSkillsBlur = () => {
        // Process skills when user finishes typing
        const processedSkills = skillsInput
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill);
        updateSkills(processedSkills);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSkillsBlur();
        }
    };
    
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
                    <label>Skills (comma separated, Press enter after finishing all the skills)</label>
                    <input
                        type="text"
                        id="skills"
                        placeholder="JavaScript, React, Node.js, HTML, CSS"
                        value={skillsInput}
                        onChange={handleSkillsChange}
                        onBlur={handleSkillsBlur}
                        onKeyPress={handleKeyPress}
                    />
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;