import React from "react";
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

const Objective = () => {

  return (
    <section className="pb-3 border-bottom border-2 ">
      <div className="row">
        <div className="col-sm">
          <div className="text-center">
            <FontAwesomeIcon icon={faFlag} />
            &nbsp;
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "To contribute professionally to the growth of the organization to the best of my ability and seek professional and personal growth in the process.",
                3000,
                "To contribute professionally to the growth of the organization to the best of my ability and seek professional and personal growth in the process.",
                3000
              ]}
            />
            &nbsp;
            <FontAwesomeIcon icon={faFlag} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;