import React from "react";
import Dots from "./Dots";
import Eye from "./Eye";
import data from "../data.json";

export default function Projects() {
  const projects = data.projects;
  
  const projectCards = projects.map(project => {
    const cardStyle = {
      backgroundImage: `url(./images/${project.image})`
    }
    return (
      <article className="card" key={project.id}>
          <Dots className="bg-vl-gray"/>
          <div className="card-img--container" style={cardStyle}>
            <Eye />
            <Dots className="bg-blue" isTriangle={true}/>
          </div>
          <div className="card-body">
          <div className="card-content--container">
            <div className="card-title--container">
            <Dots className="bg-blue" />
            <h4 className="card-title fw-regular">{project.name}</h4>
            </div>
            <p className="card-detail fw-extra-light">{project.detail}</p>
          </div>
          <div className="card-btn--container">
            <a className="btn bg-linear clr-white fw-regular" type="button" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github Repo</a>
            <a className="btn bg-white clr-gray fw-regular" type="button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Version</a>
          </div>
          </div>
      </article>
    )
  })
  return (
    <section id="projects" className="projects-container">
      <div className="container">
          {projectCards}
      </div>
    </section>
  );
}
