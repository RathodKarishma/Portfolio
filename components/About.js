import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="container">
      <div>
        <p className="para1">
          Get To Know More
        </p>
        <h1 id="about" >
          About me
        </h1>
      </div>

      <div class="row" id="card" >
        <div class="col-sm-5">
          <div class="card border-warning ">
            <div class="card-body">
              <h5
                class="card-title" id="education"
               
              >
                <FontAwesomeIcon icon={faUserGraduate} />
                <br />
              </h5>
              <p className="para2">Education</p>

              <p id="para3" class="card-text">
                B.C.A. , Bachelor Degree
                <br />
                M.C.A. , Master Degree
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-5">
          <div class="card border-warning">
            <div class="card-body">
              <h5
                class="card-title" id="experience"
                >
              
                <FontAwesomeIcon icon={faAward} />
                <br />
              </h5>

              <p className="para4">
                Experience
              </p>

              <p id="para5" className="card-text">
                Experience in Full stack Development course around five to six
                months.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="para6">
          Recent computer science graduate with a strong foundation in
          programming, software Development,and problems-solving.{" "}
        </p>
      </div>
    </div>
  );
}
export default About;
