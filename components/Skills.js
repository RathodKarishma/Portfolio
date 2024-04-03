import React from "react";
import logo from "../../src/asset/new html css js.webp";
import react from "../../src/asset/react.png";
import java from "../../src/asset/java-logo.png";
import sql from "../../src/asset/sql.png";
import bootstrap from "../../src/asset/boostrap.png";
function Skills() {
  return (
    <div className="container">
      <h1 className="skills">SKILLS</h1>
      <div className="border-warning" id="skillcard">
        <div className="card-body">
          <div className="row" id="skills">
          <div className="col-2">
            <img src={logo} alt="" className="flogo" />
            <p className="fpara">HTML5,CSS3,JS</p>
          </div>
          <div className="col-2">
          <img src={bootstrap} alt="" className="bootstrap" />
          <p className="bootpara">BOTSTRAP</p>
        </div>

        <div className="col-2">
          <img src={react} alt="" className="react" />
          <p className="reactpara">REACTJS</p>
        </div>
        <div className="col-2">
          <img src={java} alt="" className="java" />
          <p className="javapara">JAVA</p>
        </div>
        <div className="col-2">
          <img src={sql} alt="" className="sql" />
          <p className="sqlpara">SQL</p>
        </div>
        </div>
        </div>
      </div>

<div>
  <h1 className="fsd">Full Stack Development</h1>
  <p className="mainpara"> For me,it's important to know all sides of the web Development process.
    I'LL learn whatever technology will help me build apps that improve lives.</p> 
      <p className="mainpara1"> Develop projects and solution that involve database applications,building user interface,
    and website,and website implementation using various technologies</p>
</div>

    </div>
  );
}

export default Skills;
