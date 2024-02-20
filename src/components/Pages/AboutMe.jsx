import React from 'react';
import { FaUser } from 'react-icons/fa'; 
import { BsRocketTakeoff } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <div className="about">
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
        <h2>About Me</h2>
        <div style={{ fontSize: '100px', color: '#888', marginBottom: '20px' }}>
          <FaUser />
        </div>
        <p className="about-paragraph">
          Hello! I'm Christopher Panelli, originally from Staten Island, NY, now living in Orlando, Florida.
          I have a diverse background in sales, construction, and serving, but I recently decided to pursue
          my passion for web development. I enrolled in a full stack web development class online offered by UCF,
          and I'm excited to showcase my skills through this React Portfolio project. Feel free to explore and
          learn more about me and my projects!
        </p>
        <p className="about-paragraph">
          My journey into web development started while I was working as a Technical Success Manager at a CI/CD company. 
          The conversations with different teams on optimizing build processes sparked my interest and led me to pursue 
          this path. Now, with more projects and experience under my belt, I'm ready to dive deeper into the world of web development.
        </p>
        <p className="about-paragraph">
          Lets go for it! <BsRocketTakeoff />
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
