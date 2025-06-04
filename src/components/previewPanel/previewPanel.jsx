function PreviewPanel({resumeData}) {
    
    const {personalInfo, education, experiences, skills, projects} = resumeData;
    return (
        <div className="resume-preview">
            <div className="resume-header">
                <div className="resume-name">{personalInfo.fullName || "John Doe"}</div>
                <div className="resume-contact">
                {personalInfo.email || "johnDoe@email.com"} • {personalInfo.phone || "+1 (555) 123-4567"} • {personalInfo.location || "New York, NY"}
                </div>
            </div>
            <div className="resume-body">
                <div className="resume-section">
                <h3>Professional Summary</h3>
                <div className="resume-item">
                    <p>
                        { personalInfo.summary || `Experienced software developer with 5+ years of experience in
                        full-stack development. Passionate about creating efficient,
                        scalable solutions and staying current with emerging technologies.`} 
                    </p>
                </div>
                </div>
                <div className="resume-section">
                <h3>Professional Experience</h3>
                <div className="resume-item">
                    <h4>{experiences.jobTitle || "Senior Software Developer"}</h4>
                    <div className="company">{experiences.company || "Tech Solutions Inc."}</div>
                    <div className="date">{experiences.startDate || "January 2022"} - {experiences.endDate || "Present"}</div>
                    <p>
                    {experiences.description ||`Led development of web applications using React and Node.js.
                    Improved application performance by 40% through code
                    optimization and database query improvements.`}
                    </p>
                </div>
                {/* <div className="resume-item">
                    <h4>Software Developer</h4>
                    <div className="company">StartUp Co.</div>
                    <div className="date">June 2020 - December 2021</div>
                    <p>
                    Developed and maintained multiple client projects using various
                    technologies. Collaborated with cross-functional teams to
                    deliver high-quality solutions.
                    </p>
                </div> */}
                </div>
                <div className="resume-section">
                <h3>Education</h3>
                <div className="resume-item">
                    <h4>{education.degree || 'Bachelor of Science in Computer Science'}</h4>
                    <div className="company">{education.school || 'University of Technology'}</div>
                    <div className="date">{`${education.startDate || '2016'} - ${education.endDate || '2020'}`}</div>
                </div>
                </div>
                <div className="resume-section">
                <h3>Skills</h3>
                <div className="skills-list">
                    {skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))
                    ) : (
                        <>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">AWS</span>
                        </>
                    )}
                </div>

                </div>
                <div className="resume-section">
                <h3>Projects</h3>
                <div className="resume-item">
                    <h4>{ projects.projectName ||'E-commerce Platform'}</h4>
                    <div className="company">{projects.technologiesUsed || 'React, Node.js, MongoDB'}</div>
                        <p>
                            {projects.description ||`Built a full-stack e-commerce application with payment
                            integration, user authentication, and admin dashboard. Handled
                            1000+ concurrent users.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewPanel;