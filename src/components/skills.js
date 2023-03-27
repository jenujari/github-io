import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faFillDrip} /> &nbsp;
            {"Skills"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>
            <li className="fs-5">
              {"Skills "} <b>{"PHP7, Nodejs, Golang, MySQL, ReactJS, Typescript, "}</b> {"  HTML5, CSS3."}
            </li>
            <li className="fs-5">
              Mirco service container orchestration using <b>Docker and Kubernetes.</b>
            </li>
            <li className="fs-5">
              {"Usage of development tools and library like jQuery, "} <b>{"Bootstrap, Tailwind, Gulp, Webpack, Babel."}</b>
            </li>
            <li className="fs-5">
              {"Usage of version control tools like "}<b>{"Git, Github, Bitbucket, Jenkins, Codepipeline, CI/CD."}</b>
            </li>
            <li className="fs-5">
              {"Expertise in object oriented programing and "}<b>{"design principles concepts."}</b>
            </li>
            <li className="fs-5">
              {"Integration Ability: Expertise in integrating "}<b>{"third party web services"}</b>
            </li>
            <li className="fs-5">
              {"AWS services like IOT, "}
              <b>
                {"Lambda functions,"}
              </b>
              {" S3, Route52, "}
              <b>
                {"DynamoDB, API Gateway, EC2 instances configuration"}
              </b>
            </li>
            <li className="fs-5">
              {"Platforms: "}
              <b>
                {"Linux (Ubuntu),"}
              </b>
              {" Windows"}
            </li>
            <li className="fs-5">
              {"Web Hosting: Apache/NGINX server configurations, FTP, SSH, logs"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;