import React from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const ResumePreview = React.forwardRef(({ data }, ref) => {
  const hasContent = (arr) => arr && arr.length > 0;

  return (
    <div className="resume-paper" ref={ref}>
      <div className="resume-header">
        {data.personal.image && (
          <img src={data.personal.image} alt="Profile" className="resume-image" />
        )}
        <div className="resume-name-title">
          <h1>{data.personal.name || 'Your Name'}</h1>
          <h2>{data.personal.title || 'Professional Title'}</h2>
          
          <div className="resume-contact">
            {data.personal.email && (
              <div className="contact-item">
                <Mail size={12} />
                <span>{data.personal.email}</span>
              </div>
            )}
            {data.personal.phone && (
              <div className="contact-item">
                <Phone size={12} />
                <span>{data.personal.phone}</span>
              </div>
            )}
            {data.personal.location && (
              <div className="contact-item">
                <MapPin size={12} />
                <span>{data.personal.location}</span>
              </div>
            )}
            {data.personal.github && (
              <div className="contact-item">
                <GithubIcon />
                <span>{data.personal.github}</span>
              </div>
            )}
            {data.personal.linkedin && (
              <div className="contact-item">
                <LinkedinIcon />
                <span>{data.personal.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="resume-body">
        {/* Left Column (Main Content) */}
        <div className="resume-main">
          {data.bio && (
            <div className="resume-section">
              <h3 className="resume-section-title">Professional Summary</h3>
              <p className="resume-bio">{data.bio}</p>
            </div>
          )}

          {hasContent(data.experience) && (
            <div className="resume-section">
              <h3 className="resume-section-title">Experience</h3>
              {data.experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="item-header">
                    <span className="item-title">{exp.title}</span>
                    <span className="item-duration">{exp.duration}</span>
                  </div>
                  <div className="item-subtitle">{exp.company}</div>
                  {exp.description && <div className="item-desc">{exp.description}</div>}
                </div>
              ))}
            </div>
          )}

          {hasContent(data.projects) && (
            <div className="resume-section">
              <h3 className="resume-section-title">Projects</h3>
              {data.projects.map((proj) => (
                <div key={proj.id} className="experience-item">
                  <div className="item-header">
                    <span className="item-title">{proj.name}</span>
                  </div>
                  {proj.link && (
                    <div className="item-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <LinkIcon size={12} /> {proj.link}
                    </div>
                  )}
                  {proj.description && <div className="item-desc">{proj.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Sidebar Content) */}
        <div className="resume-sidebar">
          {data.skills && (
            <div className="resume-section">
              <h3 className="resume-section-title">Skills</h3>
              <div className="skills-list">
                {data.skills.split(',').map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasContent(data.education) && (
            <div className="resume-section">
              <h3 className="resume-section-title">Education</h3>
              <ul className="simple-list">
                {data.education.map((edu) => (
                  <li key={edu.id}>
                    <div className="list-title">{edu.degree}</div>
                    <div className="list-subtitle">{edu.institution}</div>
                    <div className="list-subtitle">{edu.year} • {edu.grade}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContent(data.certifications) && (
            <div className="resume-section">
              <h3 className="resume-section-title">Certifications</h3>
              <ul className="simple-list">
                {data.certifications.map((cert) => (
                  <li key={cert.id}>
                    <div className="list-title">{cert.name}</div>
                    <div className="list-subtitle">{cert.issuer} • {cert.year}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContent(data.awards) && (
            <div className="resume-section">
              <h3 className="resume-section-title">Awards</h3>
              <ul className="simple-list">
                {data.awards.map((award) => (
                  <li key={award.id}>
                    <div className="list-title">{award.name}</div>
                    <div className="list-subtitle">{award.issuer} • {award.year}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default ResumePreview;
