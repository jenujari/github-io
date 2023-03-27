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
            <b>Golang</b> developer certified program provided by vskils , Certification by Govt. of India
          </li>
          <li className="fs-5">
            Professional certificate program in <b>Blockchain</b> from <b>IIT Kanpur</b> program delivered by Simplilearn in 2022.
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