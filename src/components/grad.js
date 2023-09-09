import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Grad = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faGraduationCap} /> &nbsp;
            {"Academic Highlights"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>
          <li className="fs-5">
            <a target="_blank" href="https://success.simplilearn.com/10755ed1-ab69-4e74-9075-b428fc0a8ed2" rel="noreferrer"><b>Devops</b></a> certificate from Simplilernt that involves CI/CD pipeline building, Docker, Kubernetes (CKAD).
          </li>
          <li className="fs-5">
            <a href="https://www.vskills.in/certification/99801-go-language-professional-jenish-jariwala" target="_blank" rel="noreferrer"><b>Golang</b></a> developer certified program provided by vskils , Certification by Govt. of India
          </li>
          <li className="fs-5">
            Professional certificate program in  &nbsp;
            <a target="_blank" href="https://success.simplilearn.com/d6809a3f-c8bc-48c7-b350-f7ab7ea09ad0#gs.5hnbuj" rel="noreferrer">
            <b>Blockchain</b>
            </a> &nbsp;
             from <b>IIT Kanpur</b> program delivered by Simplilearn in 2022.
          </li>
            <li className="fs-5">
              <b>{"Application developr"}</b>{" certificate from "}<b>{"ITSource Technologies Limited"}</b> {" in 2012 for using "}
              <b>{"Sql Server, C#, Java technologies"}</b>
            </li>
            <li className="fs-5">
              <b>{"Bachelor of Engineering"}</b>{" in "} <b>{"Electronics and Communications"}</b> {" from sarvajanik college of engineering and technology (Gujarat Technology University) in 2012 and secured second class."}
            </li>
            <li className="fs-5">
              {"12"}<sup>{"th"}</sup>{" from GSEB, Gujarat in 2008 and secured second class"}
            </li>
            
            <li className="fs-5">
              {"10"}<sup>{"th"}</sup>{" from GSEB, Gujarat in 2005 and secured distinction"}
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Grad;