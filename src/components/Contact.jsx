import { HiLocationMarker, HiMail } from "react-icons/hi";
import { BiSolidPhone } from "react-icons/bi";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
const Contact = () => {
  return (
    <div className="container mt-5   bg-body-secondary  rounded-5">
      <div className="row  p-2">
        <div className="col-lg-6 mb-4 mb-lg-0 content ">
          <h2 className="mt-5 mb-2 " style={{ textAlign: "justify" }}>
            Get In Touch
          </h2>
          <p>
            {" "}
            <HiLocationMarker /> Opposite Bank of Baroda, Ward Number 3,
            Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022
          </p>
          <p>
            <BiSolidPhone /> <a href="tel:+918668681466">+91 8668681466</a>,{" "}
            <a href="tel:+918956101181">+91 8956101181</a>
          </p>
          <p>
            <HiMail />{" "}
            <a href="mailto:info@elioratechno.com">info@elioratechno.com</a>
          </p>
          <a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==">
            {" "}
            <SiInstagram />
          </a>
          <a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL">
            {" "}
            <SiFacebook />
          </a>{" "}
          <a href=" https://www.linkedin.com/company/eliora-it-services/">
            {" "}
            <SiLinkedin />
          </a>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
      <iframe
        className="position-relative rounded w-100 h-100 py-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9180959043256!2d79.0352295750507!3d21.115831284782693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c105be93e64b%3A0x633455db6ed2def4!2sELIORA%20TECHNOLOGY%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1697103158268!5m2!1sen!2sin"
        frameBorder="0"
        style={{ minHeight: '300px', minWidth:'600px'}}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Google Map"
      ></iframe>
    </div>
        </div>
        <div className="col-lg-6 mt">
          <h5 className=" mb-4">Contact Form</h5>
          <form>
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control shadow py-2"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control shadow py-2"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control shadow py-2"
                placeholder="Enter Your Contact Number"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control shadow py-2"
                rows="5"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark shadow px-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
