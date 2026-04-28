import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, FileText, LayoutTemplate, RotateCcw } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { emptyData, sampleData } from './data';

function App() {
  const [resumeData, setResumeData] = useState(emptyData);
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    const element = resumeRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${resumeData.personal.name || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const loadSampleData = () => {
    setResumeData(sampleData);
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      setResumeData(emptyData);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">
          <FileText size={28} />
          <span>ResumeCraft</span>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={clearData}>
            <RotateCcw size={16} /> Reset
          </button>
          <button className="btn btn-secondary" onClick={loadSampleData}>
            <LayoutTemplate size={16} /> Sample Data
          </button>
          <button className="btn btn-primary" onClick={handleDownloadPdf}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </header>

      <div className="editor-section">
        <ResumeForm data={resumeData} onChange={setResumeData} />
      </div>

      <div className="preview-section">
        <ResumePreview data={resumeData} ref={resumeRef} />
      </div>
    </div>
  );
}

export default App;
