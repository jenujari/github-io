import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const Personal = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faUserEdit} /> &nbsp;
            {"Personal Information"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>
            <li className="fs-5">
              <b>{"Full name -"}</b> {"Jenish Sanjaykumar Jariwala"}
            </li>
            <li className="fs-5">
              <b>{"Date of Birth -"}</b> {"12"}<sup>{"th"}</sup>{" June 1990."}
            </li>
            <li className="fs-5">
              <b>{"Gender -"}</b> {"Male"}
            </li>
            <li className="fs-5">
              <b>{"Languages known -"}</b> {"English, Hindi and Gujarati."}
            </li>
            <li className="fs-5">
              <b>{"Address -"}</b> {"404 - G3/6, Green city towers, Green city road, Nr Bagban Circle, Pal-Batha, Adajan, Surat, Gujarat, India - 394510."}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Personal;