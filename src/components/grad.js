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
              {"Bachelor of Engineering in "} <b>{"Electronics and Communications"}</b> {" from sarvajanik college of engineering and technology (Gujarat Technology University) in 2012 and secured second class."}
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