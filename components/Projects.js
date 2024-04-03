import React from "react";
import p1 from "../asset/p1.png";
import p2 from "../asset/p2.png";
import p3 from "../asset/p3.png"
import p4 from "../asset/p4.png"
function Projects() {
  return (
    <div className="container">
      <h1 className="projects">Projects</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"5%"}}>
        <div class="col">
        <div class="card h-100">
            <img src={p1} class="card-img-top h-500" alt="..." />
            <div class="card-body">
              <h5 class="card-title">HTML,CSS</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={p2} class="card-img-top h-500" alt="..." />
            <div class="card-body">
              <h5 class="card-title">HTML,CSS,BOOTSTRAP</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={p3} class="card-img-top h-500" alt="..." />
            <div class="card-body">
              <h5 class="card-title">TODO LIST</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
          <img src={p4} class="card-img-top h-500" alt="..." />
            <div class="card-body">
              <h5 class="card-title">PORTFOLIO</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
