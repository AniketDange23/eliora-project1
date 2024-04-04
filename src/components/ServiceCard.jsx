import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const ServiceCard = ({
  title,
  buttonText,
  buttonLink,
  features,
}) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp">
      <div className="position-relative shadow rounded-5 border-5 border-dark bg-warning">
        <div className="text-center p-4 pt-5">
          <h5 className="fw-bold">{title}</h5>
        </div>
        <div className="p-4">
          {features.map((feature, index) => (
            <p
              key={index}
              className={
                index === features.length - 1 ? "" : "border-bottom pb-3 border-dark"
              }
            >
              <BsPatchCheckFill /> {feature}
            </p>
          ))}
        </div>{" "}
        <div className="text-center border-bottom p-4">
          <a className="btn bg-dark text-light px-4 py-2" href={buttonLink}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
