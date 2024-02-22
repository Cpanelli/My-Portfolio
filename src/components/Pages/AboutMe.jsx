import React from "react";
import { FaUser } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="about">
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2>
          <span
            style={{
              marginBottom: "50px",
              display: "inline-block",
              color: "#FFF",
              fontSize: "30px",
              verticalAlign: "middle",
              marginRight: "8px",
              backgroundColor: "#154062",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            About
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            id="about-me"
          >
            <g fill="none" fill-rule="evenodd">
              <rect width="72" height="72" fill="#154062" rx="4"></rect>
              <path
                fill="#FFF"
                d="M35.022 45.846V33.021c0-2.117-.937-3.542-3.256-3.542-1.914 0-3.707 1.303-4.562 2.606v13.761h-4.277V33.021c0-2.117-.895-3.542-3.217-3.542-1.914 0-3.664 1.343-4.56 2.606v13.761h-4.276V26.181h4.275v2.647c.856-1.181 3.423-3.135 6.435-3.135 2.932 0 4.724 1.465 5.375 3.583 1.1-1.751 3.706-3.583 6.679-3.583 3.584 0 5.66 1.954 5.66 5.944v14.21h-4.276zm6.662-9.852c0-5.701 4.154-10.301 9.977-10.301 5.904 0 9.651 4.478 9.651 10.667v1.059H46.163c.327 2.932 2.525 5.415 6.232 5.415 1.954 0 4.194-.774 5.619-2.2l1.953 2.81c-1.995 1.874-4.887 2.892-7.98 2.892-5.946 0-10.303-4.113-10.303-10.342zm9.937-6.8c-3.625 0-5.336 2.81-5.498 5.171H57.2c-.124-2.32-1.712-5.17-5.58-5.17z"
              ></path>
            </g>
          </svg>
        </h2>
        <div
          style={{ fontSize: "100px", color: "#888", marginBottom: "20px" }}
        ></div>
        <div
          style={{
            color: "#888",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          <p className="about-paragraph" style={{ marginBottom: "20px" }}>
            Hello! I'm Christopher Panelli, originally from Staten Island, NY,
            now living in Orlando, Florida. I have a diverse background in
            sales, construction, and serving, but I recently decided to pursue
            my passion for web development. I enrolled in a full stack web
            development class online offered by UCF, and I'm excited to showcase
            my skills through this React Portfolio project. Feel free to explore
            and learn more about me and my projects!
          </p>
          <p className="about-paragraph" style={{ fontStyle: "italic" }}>
            My journey into web development began with independent research and
            self-learning. Inspired by my curiosity, I embarked on this path by
            exploring various online resources, particularly through watching
            YouTube videos. As I delved deeper into the world of web
            development, I discovered a passion for crafting digital experiences
            and solving technical challenges. This self-driven approach has
            equipped me with valuable skills and knowledge, motivating me to
            pursue further opportunities in the field.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-emoji-sunglasses-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
        </svg>
      </div>
    </div>
  );
};

export default AboutMe;
