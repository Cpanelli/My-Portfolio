import React from "react";

export default function Project({ application, id, image, title }) {
  return (
    <div className="custom-project">
      <a
        href={application}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-project-link"
      >
        <img src={image} alt={title} className="custom-project-img" key={id} />
        <div className="custom-project-title">{title}</div>
      </a>
    </div>
  );
}
