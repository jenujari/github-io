import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

const Title = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm text-center fs-1 fw-bold text-capitalize">
          {"jenish jariwala"}
        </div>
        {/* 
          <div className="col-sm"> One of three columns </div>
          <div className="col-sm"> One of three columns </div> 
          */}
      </div>
      <div className="row pt-2">
        <div className="col-sm text-center fs-6">
          <FontAwesomeIcon size="lg" icon={faMailBulk} /> &nbsp;
              <a href="mailto:jenishjariwala54@gmail.com">
            {"jenishjariwala54@gmail.com"}
          </a> &nbsp;| &nbsp;
              <FontAwesomeIcon size="lg" icon={faWhatsapp} /> &nbsp;
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919227900563">
            {"+91-9227900563"}
          </a>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm text-center fs-6">
          <FontAwesomeIcon size="lg" icon={faLinkedin} /> &nbsp;
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jenishjariwala5456/">
            {"https://www.linkedin.com/in/jenishjariwala5456/"}
          </a>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm text-center fs-6">
          <FontAwesomeIcon size="lg" icon={faStackOverflow} /> &nbsp;
              <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/cv/jenishjariwala54">
            {"https://stackoverflow.com/cv/jenishjariwala54"}
          </a>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-sm text-center fs-6">
          <FontAwesomeIcon size="lg" icon={faGithub} /> &nbsp;
              <a target="_blank" rel="noreferrer" href="https://github.com/JenuJari">
            {"https://github.com/JenuJari"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;