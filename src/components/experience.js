import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faHandsHelping} /> &nbsp;
            {"Organizational Experience"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>
            <li className="fs-5">
              {"Since Oct ’16 Crest info-systems Pvt. Ltd. as Sr web developer."}
            </li>
            <li className="fs-5">
              {"Since Nov ’15 to Oct 16 UNO India Dev Co as Sr web developer"} 
            </li>
            <li className="fs-5">
              {"Since Jan ’14 to May ‘15 Knack Technology Pvt. Ltd as Jr web developer."}
            </li>
            <li className="fs-5">
              {"Since Jan ’14 to May ‘15 Knack Technology Pvt. Ltd as Jr web developer."} 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;