import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faUserTie} /> &nbsp;
            {"Professional Profile"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>
            <li className="fs-5">
              {"An astute professional with 9+ years of experience in Fullstack Web Application Development."}
            </li>
            <li className="fs-5">
              {"Presently associated with "} <b>{"Tata Consultancy Services Pvt. Ltd."}</b>
            </li>
            <li className="fs-5">
              {"Expertise in development of product based on client requirements ensuring optimal utilization of technology and strictly adhering to t  he "}
              <b>
                {"Development & Coding Standards."}
              </b>
            </li>
            <li className="fs-5">
              {"Have working expiriyance in developing apps for Supply chain, Banking and finance industry, online booking systems, e-commerce domains, and other domains."}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;