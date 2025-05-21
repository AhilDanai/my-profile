import { useState, useEffect, useRef } from 'react';
import { User, Code, Briefcase, GraduationCap, Folder, Mail, Phone, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    const sectionRefs = useRef({});

    useEffect(() => {
        sections.forEach((section) => {
            sectionRefs.current[section] = sectionRefs.current[section] || { current: null };
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
        setMenuOpen(false);
    };

    // Sample projects data
    const projects = [
        {
            id: 1,
            title: "E-commerce Dashboard",
            description: "A responsive dashboard for e-commerce analytics with real-time data visualization.",
            technologies: ["React", "CSS", "Chart.js", "RESTful API"],
            color: "blue"
        },
        {
            id: 2,
            title: "Social Media App",
            description: "Feature-rich social platform with real-time messaging and content sharing.",
            technologies: ["React", "Socket.io", "Express", "MongoDB"],
            color: "purple"
        },
        {
            id: 3,
            title: "Weather Forecast Application",
            description: "Dynamic weather application with location-based forecasting and interactive maps.",
            technologies: ["React", "OpenWeather API", "Leaflet.js", "Geolocation API"],
            color: "green"
        }
    ];

    // Skills data
    const skills = [
        { name: "HTML5", level: 90, color: "orange" },
        { name: "CSS3", level: 85, color: "blue" },
        { name: "JavaScript", level: 80, color: "yellow" },
        { name: "React", level: 85, color: "light-blue" },
        { name: "Bootstrap", level: 80, color: "purple" },
        { name: "CSS", level: 75, color: "teal" },
        { name: "API Integration", level: 80, color: "green" },
        { name: "Git/GitHub", level: 75, color: "dark-gray" }
    ];

    return (
        <div className="portfolio">
            <div className="animated-bg">
                <div className="animated-bg-shape"></div>
                <div className="animated-bg-shape"></div>
                <div className="animated-bg-shape"></div>
            </div>
            {/* Navigation */}
            <nav className="main-nav">
                <div className="container nav-container">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="logo"
                    >
                        <img src="/logo.png" alt="Logo" width={140} className="logo-image" />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`nav-link ${activeSection === section ? 'active' : ''} glass-effect`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="mobile-nav-toggle">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="toggle-button"
                        >
                            {menuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mobile-menu"
                        >
                            <div className="container mobile-menu-container">
                                {sections.map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                                    >
                                        {section}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Home Section */}
            <section id="home" className="home-section">
                <div className="container">
                    <div className="home-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="home-text"
                        >
                            <h1 className="main-heading">
                                Hi, I'm <span className="gradient-animated-text">Ahil Danai</span>
                            </h1>
                            <h2 className="sub-heading">Frontend Developer</h2>
                            <p className="intro-text">
                                Passionate about creating intuitive, responsive web experiences using modern frontend technologies.
                            </p>
                            <div className="button-group">
                                <button onClick={() => scrollToSection('contact')} className="primary-button btn-3d magnetic-button">
                                    Get in Touch
                                </button>
                                <button onClick={() => scrollToSection('projects')} className="secondary-button btn-3d magnetic-button">
                                    View Projects
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="profile-image-container glow-effect"
                        >
                            <div className="profile-image-border">
                                <div className="profile-image">
                                    <img src="/ahil-danai.jpg" alt="Ahil Danai" className="profile-pic" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading">
                            <span className="heading-underline scroll-underline">About Me</span>
                        </h2>
                        <div className="about-content">
                            <div className="about-summary">
                                <div className="summary-card">
                                    <div className="card-header">
                                        <User className="icon blue-icon" size={24} />
                                        <h3 className="card-title">Professional Summary</h3>
                                    </div>
                                    <p className="card-text">
                                        Passionate and skilled Frontend Developer with 1 year and 6 months of professional experience, plus 6 months internship.
                                    </p>
                                    <p className="card-text">
                                        Proficient in HTML5, CSS3, Bootstrap, JavaScript, jQuery, React, and various frontend libraries. Experienced in working with APIs, AJAX, and Postman for seamless web integration and dynamic applications.
                                    </p>
                                </div>
                            </div>
                            <div className="about-why-work">
                                <h3 className="subtitle">Why Work With Me?</h3>
                                <ul className="feature-list">
                                    <li className="feature-item">
                                        <span className="feature-icon blue">
                                            <Code size={20} />
                                        </span>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Modern Tech Stack</h4>
                                            <p className="feature-text">Expertise in cutting-edge frontend technologies and frameworks</p>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon purple">
                                            <Briefcase size={20} />
                                        </span>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Professional Experience</h4>
                                            <p className="feature-text">Real-world development experience building applications</p>
                                        </div>
                                    </li>
                                    <li className="feature-item">
                                        <span className="feature-icon green">
                                            <GraduationCap size={20} />
                                        </span>
                                        <div className="feature-content">
                                            <h4 className="feature-title">Continuous Learning</h4>
                                            <p className="feature-text">Currently pursuing B.Voc in Information Technology</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading">
                            <span className="heading-underline scroll-underline">Experience</span>
                        </h2>
                        <div className="timeline-container">
                            <div className="timeline">
                                {/* Timeline Line */}
                                <div className="timeline-line"></div>

                                {/* Experience 1 */}
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-left">
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="job-title">Frontend Development Intern</h3>
                                                <p className="company-name">Ordereasy Techsolutions</p>
                                                <p className="job-duration">6 months</p>
                                            </motion.div>
                                        </div>
                                        <div className="timeline-marker glow-effect purple-bg">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div className="timeline-right">
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                                className="experience-card tilt-effect"
                                            >
                                                <ul className="experience-list">
                                                    <li>Assisted in designing and coding front-end features using HTML5, CSS3, JavaScript, and jQuery</li>
                                                    <li>Supported the development team in testing APIs with Postman and debugging AJAX requests</li>
                                                    <li>Contributed to UI/UX improvements for better user engagement and experience</li>
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Experience 2 */}
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-left">
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="job-title">Frontend Developer</h3>
                                                <p className="company-name">Ordereasy Techsolutions</p>
                                                <p className="job-duration">1 year 2 months</p>
                                            </motion.div>
                                        </div>
                                        <div className="timeline-marker glow-effect">
                                            <Briefcase size={24} />
                                        </div>
                                        <div className="timeline-right">
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                                className="experience-card tilt-effect"
                                            >
                                                <ul className="experience-list">
                                                    <li>Developed responsive user interfaces using React, Bootstrap, and custom CSS</li>
                                                    <li>Integrated multiple third-party APIs to enhance application functionality</li>
                                                    <li>Implemented AJAX calls to provide dynamic content updates without page reloads</li>
                                                    <li>Collaborated with backend developers to ensure smooth API communication</li>
                                                    <li>Maintained and improved existing codebase ensuring high performance</li>
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Education */}
                            <div className="education">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="education-heading">Education</h3>
                                    <div className="education-card">
                                        <p className="education-degree">B.Voc in Information Technology</p>
                                        <p className="education-year">2023–2026</p>
                                        <p className="education-status">Currently in Semester 5</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading">
                            <span className="heading-underline scroll-underline">Skills</span>
                        </h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="skill-item"
                                >
                                    <div className="skill-header">
                                        <h3 className="skill-name">{skill.name}</h3>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className={`skill-progress ${skill.color} skill-glow`}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading">
                            <span className="heading-underline scroll-underline">Projects</span>
                        </h2>
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="project-card glass-effect hover-lift hover-card"
                                >
                                    <div className={`project-stripe ${project.color}`}></div>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="project-footer">
                                            <button className="project-link">
                                                View Details
                                            </button>
                                            <Folder size={20} className="project-icon" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section wavy-bg">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading">
                            <span className="heading-underline scroll-underline">Get In Touch</span>
                        </h2>
                        <div className="contact-content">
                            <div className="contact-info">
                                <h3 className="contact-heading">Contact Information</h3>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <Mail className="contact-icon" size={24} />
                                        <div className="contact-text">
                                            <p className="contact-label">Email</p>
                                            <a href="mailto:ahildanai@gmail.com" className="contact-link">
                                                ahildanai@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Phone className="contact-icon" size={24} />
                                        <div className="contact-text">
                                            <p className="contact-label">Phone</p>
                                            <a href="tel:8780313381" className="contact-link">
                                                +91 8780313381
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <Linkedin className="contact-icon" size={24} />
                                        <div className="contact-text">
                                            <p className="contact-label">LinkedIn</p>
                                            <a
                                                href="https://www.linkedin.com/in/ahil-danai-bb2843340/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-link"
                                            >
                                                Ahil Danai
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-container spotlight">
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="form-textarea"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="submit-button">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer wavy-bg">
                <div className="container">
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} Ahil Danai. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}