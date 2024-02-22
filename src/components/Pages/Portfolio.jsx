import React from "react";
import Project from "../Project";

const projects = [
  {
    id: 1,
    application: "https://cpanelli.github.io/PanelliWeather/",
    github: "https://github.com/cpanelli/PanelliWeather",
    image: "/public/imgs/panelli_weather.jpg",
    title: "Panelli Weather",
  },
  {
    id: 2,
    application: "https://messeger-8qqs.onrender.com/",
    github: "https://github.com/crockevin/Messenger/tree/main",
    image: "/imgs/message.jpg",
    title: "Messeger",
  },
  {
    id: 1,
    application:
      "https://constellation-application-b32a4fee0e20.herokuapp.com/",
    github: "https://github.com/ZekuzaKeane/andromeda",
    image: "/imgs/space.jpeg",
    title: "Constellation",
  },
  {
    id: 3,
    application: "https://ayay2002.github.io/OgGroup/",
    github: "https://github.com/ayay2002/OgGroup",
    image: "/imgs/Pokemon4k.jpeg",
    title: "OG Group",
  },
  {
    id: 4,
    application: "https://cpanelli.github.io/Quiz/",
    github: "https://github.com/cpanelli/Quiz",
    image: "/imgs/quiz.jpg",
    title: "Quiz",
  },
];

export default function Portfolio() {
  return (
    <div className="custom-portfolio" style={{ textAlign: "center" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#0D0221" }}
      >
        My Portfolio
      </h2>
      <div
        className="custom-project-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            application={project.application}
            id={project.id}
            image={project.image}
            title={project.title}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
