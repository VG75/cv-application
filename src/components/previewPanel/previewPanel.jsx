function previewPanel({resumeData}) {
    const { personalInfo } = resumeData;
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
    );
}

export default previewPanel