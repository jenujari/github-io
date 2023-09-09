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
              {"Since April 2023 "}<b>{"Truelance enterprise Pvt Limited"}</b>{" as Senior Software Engineer"}
            </li>
            <li className="fs-5">
              {"Since Jan 2023 to March 2023 "}<b>{"Everledger Systems Pvt Limited"}</b>{" as Senior Software Engineer"}
            </li>
            <li className="fs-5">
              {"Since Aug 2021 to Dec 2022 "}<b>{"Tata Consultancy Services Pvt. Ltd."}</b>{" as Assistant Consultant."}
            </li>
            <li className="fs-5">
              {"Since Oct 2016 to Jul 2021 "}<b>{"Crest info-systems Pvt. Ltd"}</b>{" as Sr web developer"} 
            </li>
            <li className="fs-5">
              {"Since Jul 2015 to Oct 2016 "}<b>{"UNO India Dev Co"}</b>{" as Sr web developer"} 
            </li>
            <li className="fs-5">
              {"Since Jan 2014 to Jun 2015 "}<b>{"Knack Technology Pvt. Ltd"}</b>{" as Jr. Software Developper."}
            </li>
            <li className="fs-5">
              {"Since Oct 2012 to Dec 2013 "}<b>{"Tech Ascender Pvt. Ltd."}</b>{" as Jr. Software Developper."} 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;