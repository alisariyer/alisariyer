import React from "react";
import Dots from "./Dots";
import data from "../data.json";

export default function Projects() {
  const projects = data.projects;
  const projectCards = projects.map(project => {
    return (
      <article className="card" key={project.id}>
        <div className="card-img--container">
          <Dots backgroundColor="#356EFF" isTriangle={true}/>
          <img className="card-img" src={project.imageUrl} alt={project.name} />
        </div>
        <div className="card-title--container">
          <Dots backgroundColor="#356EFF" />
          <h4 className="card-title">{project.name}</h4>
          <p className="card-detail">{project.detail}</p>
        </div>
        <div className="card-btn-container">
          <button className="btn btn-github" type="button">Github Repo</button>
          <button className="btn btn-live" type="button">Live Version</button>
        </div>
        <Dots backgroundColor="#ffffff36" />
      </article>
    )
  })
  return (
    <section className="projects-container">
        <h3 className="projects-title light"><span className="blue">#</span>my-projects</h3>
        {projectCards}
    </section>
  );
}
