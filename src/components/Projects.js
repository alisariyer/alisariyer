import React from "react";
import Dots from "./Dots";
import data from "../data.json";

export default function Projects() {
  const projects = data.projects;

  const projectCards = projects.map(project => {
    return (
      <article className="card" key={project.id}>
        <Dots backgroundColor="#ffffff36"/>
        <div className="card-img--container">
          <Dots backgroundColor="#356EFF" isTriangle={true}/>
          <img className="card-img" src={`./images/${project.image}`} alt={project.name} />
        </div>
        <div className="card-content--container">
          <div className="card-title--container">
          <Dots backgroundColor="#356EFF" />
          <h4 className="card-title regular">{project.name}</h4>
          </div>
          <p className="card-detail extra-light">{project.detail}</p>
        </div>
        <div className="card-btn--container">
          <button className="btn btn-github regular" type="button">Github Repo</button>
          <button className="btn btn-live regular" type="button">Live Version</button>
        </div>
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
