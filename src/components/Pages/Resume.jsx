import React from "react";
import { MdFileDownload } from "react-icons/md";
// import MyResume from "../../assets/MyName-Resume.pdf";
export default function ResumeComponent() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyResume;
    link.download = "MyName-Resume.pdf";
    link.click();
  };

  return (
    <div className="custom-resume">
      <div className="custom-header-btn-container">
        <h2>Resume</h2>
        <button className="custom-download-btn" onClick={handleDownload}>
          <MdFileDownload className="custom-download-icon" />
        </button>
      </div>

      <div className="custom-proficiencies-container">
        <div className="custom-proficiencies-section">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap, Tailwind</li>
          </ul>
        </div>

        <div className="custom-proficiencies-section">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}