import React from "react";

export default function Project({ application, id, image, title }) {
  return (
    <div className="custom-project">
      <img src={image} alt={title} className="custom-project-img" key={id} />
      <div className="custom-project-title">
        <a href={application} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
}
