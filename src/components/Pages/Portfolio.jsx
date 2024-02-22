import React from "react";
import Project from "../Project";

// Project data
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
    github: "", // No GitHub link provided
    image: "/images/messeger.jpg",
    title: "Messeger",
  },
  {
    id: 1,
    application:
      "https://constellation-application-b32a4fee0e20.herokuapp.com/",
    github: "https://github.com/ZekuzaKeane/andromeda",
    image: "/images/constellation.jpg",
    title: "Constellation",
  },
{
    id: 3,
    application: "https://ayay2002.github.io/OgGroup/",
    github: "https://github.com/ayay2002/OgGroup",
    image: "/images/og_group.jpg",
    title: "OG Group",
  },
  {
    id: 4,
    application: "https://cpanelli.github.io/Quiz/",
    github: "https://github.com/cpanelli/Quiz",
    image: "/images/quiz.jpg",
    title: "Quiz",
  },
];

export default function Portfolio() {
  return (
    <div className="custom-portfolio">
      <h2>Portfolio</h2>
      <div className="custom-project-container">
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
