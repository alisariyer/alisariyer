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
          <Dots backgroundColor="#ffffff36"/>
          <div className="card-img--container" style={cardStyle}>
            <Eye />
            <Dots backgroundColor="#356EFF" isTriangle={true}/>
          </div>
          <div className="card-content--container">
            <div className="card-title--container">
            <Dots backgroundColor="#356EFF" />
            <h4 className="card-title regular">{project.name}</h4>
            </div>
            <p className="card-detail extra-light">{project.detail}</p>
          </div>
          <div className="card-btn--container">
            <a className="btn btn-github regular" type="button" href={project.githubUrl}>Github Repo</a>
            <a className="btn btn-live regular" type="button" href={project.liveUrl}>Live Version</a>
          </div>
      </article>
    )
  })
  return (
    <section className="projects-container">
      <div className="container">
          <h3 className="projects-title light"><span className="blue">#</span>my-projects</h3>
          {projectCards}
      </div>
    </section>
  );
}
