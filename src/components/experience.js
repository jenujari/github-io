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
              {"Since Aug ’21 "}<b>{"Tata Consultancy Services Pvt. Ltd."}</b>{" as Assistant Consultant."}
            </li>
            <li className="fs-5">
              {"Since Oct ’16 to July 21 "}<b>{"Crest info-systems Pvt. Ltd"}</b>{" as Sr web developer"} 
            </li>
            <li className="fs-5">
              {"Since July ’15 to Oct 16 "}<b>{"UNO India Dev Co"}</b>{" as Sr web developer"} 
            </li>
            <li className="fs-5">
              {"Since Jan ’14 to June ‘15 "}<b>{"Knack Technology Pvt. Ltd"}</b>{" as Jr. Software Developper."}
            </li>
            <li className="fs-5">
              {"Since Oct ’12 to Dec ‘13 "}<b>{"Tech Ascender Pvt. Ltd."}</b>{" as Jr. Software Developper."} 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;