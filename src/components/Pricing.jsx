import ServiceCard from "./ServiceCard";
import { BsPatchCheckFill } from "react-icons/bs";
const servicesData = [
  {
    title: "STATIC WEBSITE",
    iconClass: <BsPatchCheckFill/>,
    buttonText: "Contact Now",
    buttonLink: "tel:+918956101181",
    features: [
      "5 Pages Website",
      "1 Year Free Domain",
      "1 Year Free Hosting",
      "5 Free Email IDs",
      "Contact Form",
      "SSL Certificate",
      "Animations",
      "Inquiry form Pop Up",
      "Seo Friendly website",
      "100% Responsive",
      "Call Button Integration",
      "Image & Videos (upto 25 images & 4 videos)",
      "Database Connectivity"
    ]
  },
  {
    title: "DYNAMIC WEBSITE",
    iconClass: "fa fa-server",
    buttonText: "Contact Now",
    buttonLink: "tel:+918956101181",
    features: [
      "12 Pages Website",
      "1 Year Free Domain",
      "1 Year Free Hosting",
      "20 Free Email IDs",
      "Contact Form",
      "SSL Certificate",
      "Animations",
      "Inquiry form Pop Up",
      "Seo Friendly website",
      "100% Responsive",
      "Call Button Integration",
      "Image & Videos (upto 35 images & 8 videos)",
      "Database Connectivity",
      "Social Media integration"
    ]
  },
  {
    title: "E-COMMERCES",
    iconClass: "fa fa-cog",
    buttonText: "Contact Now",
    buttonLink: "tel:+918956101181",
    features: [
      "12 Pages Website",
      "1 Year Free Domain",
      "1 Year Free Hosting",
      "20 Free Email IDs",
      "Contact Form",
      "SSL Certificate",
      "Animations",
      "Inquiry form Pop Up",
      "Seo Friendly website",
      "100% Responsive",
      "Call Button Integration",
      "Image & Videos (upto 35 images & 8 videos)",
      "Database Connectivity",
      "Social Media integration",
      "Payment Getway",
      "Online Booking",
      "E-commers Features",
      "Add to Cart Option",
      "Support for 3 Months",
      "Admin Panel"
    ]
  }
];

const Pricing = () => (
  <div className="container px-lg-5">
    <div className="position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
      <h2 className="mb-3">Our Services Plans</h2>
    </div>
    <div className="row gy-5 gx-4">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Pricing;