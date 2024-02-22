import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="main-layout">
      <header>
        <div className="header-info">
          <img
            src="imgs/Myself.jpeg"
            alt="Chris Panelli"
            className="profile-photo"
          />
          <h1 className="header-name">Chris Panelli</h1>
        </div>
        <nav>
          <button className="menu-button" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 -960 960 960"
              width="28"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </nav>
      </header>
      {sidebarVisible && (
        <div className="sidebar">
          <button className="exit-button" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <nav>
            <Link className="side-button" to="/about">
              About
            </Link>
            <Link className="side-button" to="/contact">
              Contact
            </Link>
            <Link className="side-button" to="/portfolio">
              Portfolio
            </Link>
            <Link className="side-button" to="/resume">
              Resume
            </Link>
          </nav>
        </div>
      )}
      <main>
        <Outlet />
      </main>
      <footer>
        <nav>
          <div>
            <a
              href="https://github.com/Cpanelli/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-icon" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/christopher-panelli-b05522242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
