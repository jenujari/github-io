import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-start fs-3">
            <FontAwesomeIcon icon={faTasks} /> &nbsp;
            {"Projects Handled"}
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm">
          <ul>

            <li>
              <b>Customer facing booking mobile app in React Native</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> Nodejs, React Native, Android, IOS
              </li>
              <li>
                <b>Description:</b> Making customer facing services booking mobile app using react native and styled components
              </li>
            </ul>

            <li>
              <b>E-Commerce and Entity tracking system</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> PHP7, HTML5, ReactJS, MySQL, Bootstrap, Laravel 5
              </li>
              <li>
                <b>Description:</b> Making web API and React front end to manage products inflow and out flow and selling of those
                products in chain business model.
              </li>
            </ul>

            <li>
              <b>Real time chat and messages broadcast</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> Nodejs, AWS IoT, Aws Lambda
              </li>
              <li>
                <b>Description:</b> Making real time pub-sub kind socket server using AWS IoT and AWS Lambda functions with NodeJs
                language in Lambda functions.
              </li>
            </ul>

            <li>
              <b> Menu and orders management API for restaurant </b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b>  PHP5, HTML5, JQuery, MySQL, JSON, Bootstrap, Laravel 4.2
              </li>
              <li>
                <b>Description:</b> web API project to display menus for multiple store wise for mobile app and handle orders on line from
                customers.
              </li>
            </ul>

            <li>
              <b>On line doctor consulting</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> PHP5, HTML5, JQuery, MySQL, JSON, Bootstrap, Code igniter
              </li>
              <li>
                <b>Description:</b> Web app to make consulting with doctors virtually on line via video/Audio call in witch patient can
                search doctors according to experience and expertise book appointment and consult and track history of
                consultations and prescription
              </li>
            </ul>

            <li>
              <b>Clinic appointment schedule web app</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b>  PHP5, HTML5, JQuery, MySQL, JSON, Bootstrap, Knockouts, Code igniter.
              </li>
              <li>
                <b>Description:</b> Dashboard for Scheduling and map appointment slots for doctor clinic and inform customer about 
                updates for their appointment.
              </li>
            </ul>

            <li>
              <b>Motel booking management system</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> .Net, HTML5, JQuery, MSSQL, JSON, Bootstrap.
              </li>
              <li>
                <b>Description:</b> Motel room booking management system so Motel staff can manage room booking month wise schedule 
                and housekeeping job, generate revenue reports and customer management stuff. 
              </li>
            </ul>

            <li>
              <b>LMS</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> .Net, HTML5, JQuery, MSSQL, JSON, Bootstrap.
              </li>
              <li>
                <b>Description:</b> management web app for law firm in which they are managing hearing dates and documents notes 
                related to that hearing and customer management stuff.
              </li>
            </ul>

            <li>
              <b>Nucon restaurant menu.</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> .Net, HTML5, JQuery, MSSQL, JSON, Bootstrap.
              </li>
              <li>
                <b>Description:</b> Generate dashboard item display from records and search page for searching items based on region 
                and categories.
              </li>
            </ul>

            <li>
              <b>Property display and selling</b>
            </li>
            <ul className="mb-3">
              <li>
                <b>Platform:</b> .Net, HTML5, JQuery, MSSQL, JSON, Bootstrap.
              </li>
              <li>
                <b>Description:</b> Website to display property snapshot and description for private property firm.
              </li>
            </ul>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;