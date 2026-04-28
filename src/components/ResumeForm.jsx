import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ResumeForm = ({ data, onChange }) => {
  const handlePersonalChange = (e) => {
    onChange({
      ...data,
      personal: { ...data.personal, [e.target.name]: e.target.value }
    });
  };

  const handleSimpleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (arrayName, index, field, value) => {
    const newArray = [...data[arrayName]];
    newArray[index] = { ...newArray[index], [field]: value };
    onChange({ ...data, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName, emptyItem) => {
    onChange({
      ...data,
      [arrayName]: [...data[arrayName], { id: Date.now().toString(), ...emptyItem }]
    });
  };

  const removeArrayItem = (arrayName, index) => {
    const newArray = [...data[arrayName]];
    newArray.splice(index, 1);
    onChange({ ...data, [arrayName]: newArray });
  };

  return (
    <div>
      <div className="form-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="form-grid">
          <div className="form-group full-width">
            <label>Full Name</label>
            <input type="text" name="name" value={data.personal.name} onChange={handlePersonalChange} placeholder="e.g. John Doe" />
          </div>
          <div className="form-group full-width">
            <label>Professional Title</label>
            <input type="text" name="title" value={data.personal.title} onChange={handlePersonalChange} placeholder="e.g. Software Engineer" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={data.personal.email} onChange={handlePersonalChange} placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={data.personal.phone} onChange={handlePersonalChange} placeholder="+1 234 567 890" />
          </div>
          <div className="form-group full-width">
            <label>Location</label>
            <input type="text" name="location" value={data.personal.location} onChange={handlePersonalChange} placeholder="City, State, Country" />
          </div>
          <div className="form-group full-width">
            <label>Profile Image URL</label>
            <input type="text" name="image" value={data.personal.image} onChange={handlePersonalChange} placeholder="https://..." />
          </div>
          <div className="form-group">
            <label>GitHub Link</label>
            <input type="text" name="github" value={data.personal.github} onChange={handlePersonalChange} placeholder="github.com/johndoe" />
          </div>
          <div className="form-group">
            <label>LinkedIn Link</label>
            <input type="text" name="linkedin" value={data.personal.linkedin} onChange={handlePersonalChange} placeholder="linkedin.com/in/johndoe" />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Professional Summary</h3>
        <div className="form-group">
          <textarea name="bio" value={data.bio} onChange={handleSimpleChange} placeholder="Write a short bio about your professional background..."></textarea>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Skills</h3>
        <div className="form-group">
          <label>Skills (comma separated)</label>
          <textarea name="skills" value={data.skills} onChange={handleSimpleChange} placeholder="JavaScript, React, Node.js, etc."></textarea>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="array-item">
            <button className="btn-remove" onClick={() => removeArrayItem('experience', index)} title="Remove Experience">
              <Trash2 size={16} />
            </button>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Job Title</label>
                <input type="text" value={exp.title} onChange={(e) => handleArrayChange('experience', index, 'title', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" value={exp.company} onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input type="text" value={exp.duration} onChange={(e) => handleArrayChange('experience', index, 'duration', e.target.value)} placeholder="e.g. Jan 2020 - Present" />
              </div>
              <div className="form-group full-width">
                <label>Description</label>
                <textarea value={exp.description} onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)} placeholder="Describe your responsibilities and achievements..."></textarea>
              </div>
            </div>
          </div>
        ))}
        <button className="btn-add" onClick={() => addArrayItem('experience', { title: '', company: '', duration: '', description: '' })}>
          <Plus size={16} /> Add Experience
        </button>
      </div>

      <div className="form-section">
        <h3 className="section-title">Projects</h3>
        {data.projects.map((proj, index) => (
          <div key={proj.id} className="array-item">
            <button className="btn-remove" onClick={() => removeArrayItem('projects', index)} title="Remove Project">
              <Trash2 size={16} />
            </button>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Project Name</label>
                <input type="text" value={proj.name} onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)} />
              </div>
              <div className="form-group full-width">
                <label>Project Link</label>
                <input type="text" value={proj.link} onChange={(e) => handleArrayChange('projects', index, 'link', e.target.value)} placeholder="github.com/..." />
              </div>
              <div className="form-group full-width">
                <label>Description</label>
                <textarea value={proj.description} onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)} placeholder="What did you build?"></textarea>
              </div>
            </div>
          </div>
        ))}
        <button className="btn-add" onClick={() => addArrayItem('projects', { name: '', link: '', description: '' })}>
          <Plus size={16} /> Add Project
        </button>
      </div>

      <div className="form-section">
        <h3 className="section-title">Education</h3>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="array-item">
            <button className="btn-remove" onClick={() => removeArrayItem('education', index)} title="Remove Education">
              <Trash2 size={16} />
            </button>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Degree</label>
                <input type="text" value={edu.degree} onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)} placeholder="e.g. B.S. in Computer Science" />
              </div>
              <div className="form-group full-width">
                <label>Institution</label>
                <input type="text" value={edu.institution} onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input type="text" value={edu.year} onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)} placeholder="e.g. 2018 - 2022" />
              </div>
              <div className="form-group">
                <label>Grade / GPA</label>
                <input type="text" value={edu.grade} onChange={(e) => handleArrayChange('education', index, 'grade', e.target.value)} placeholder="e.g. 3.8 GPA" />
              </div>
            </div>
          </div>
        ))}
        <button className="btn-add" onClick={() => addArrayItem('education', { degree: '', institution: '', year: '', grade: '' })}>
          <Plus size={16} /> Add Education
        </button>
      </div>

      <div className="form-section">
        <h3 className="section-title">Certifications</h3>
        {data.certifications.map((cert, index) => (
          <div key={cert.id} className="array-item">
            <button className="btn-remove" onClick={() => removeArrayItem('certifications', index)} title="Remove Certification">
              <Trash2 size={16} />
            </button>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Certification Name</label>
                <input type="text" value={cert.name} onChange={(e) => handleArrayChange('certifications', index, 'name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Issuer</label>
                <input type="text" value={cert.issuer} onChange={(e) => handleArrayChange('certifications', index, 'issuer', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input type="text" value={cert.year} onChange={(e) => handleArrayChange('certifications', index, 'year', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button className="btn-add" onClick={() => addArrayItem('certifications', { name: '', issuer: '', year: '' })}>
          <Plus size={16} /> Add Certification
        </button>
      </div>

      <div className="form-section">
        <h3 className="section-title">Awards & Recognition</h3>
        {data.awards.map((award, index) => (
          <div key={award.id} className="array-item">
            <button className="btn-remove" onClick={() => removeArrayItem('awards', index)} title="Remove Award">
              <Trash2 size={16} />
            </button>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Award Name</label>
                <input type="text" value={award.name} onChange={(e) => handleArrayChange('awards', index, 'name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Issuer / Organization</label>
                <input type="text" value={award.issuer} onChange={(e) => handleArrayChange('awards', index, 'issuer', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input type="text" value={award.year} onChange={(e) => handleArrayChange('awards', index, 'year', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button className="btn-add" onClick={() => addArrayItem('awards', { name: '', issuer: '', year: '' })}>
          <Plus size={16} /> Add Award
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
