
const AboutUs = () => {
  // Dummy data for cards
  const services = [
    { id: 1, image: "/images/image1.png", title: "Responsive Website Design" },
    { id: 2, image: "/images/image2.png", title: "Mobile App Development" },
    { id: 3, image: "/images/image3.png", title: "SEO Optimization" },
    { id: 4, image: "/images/image4.png", title: "Graphic Design" },
    { id: 5, image: "/images/image5.png", title: "Content Writing" },
    { id: 6, image: "/images/image6.png", title: "Social Media Marketing" },
  ];

  return (
    <div className="container py-5 mb-5 pt-lg-0 mt">
      <div className="row gx-0">
        <h2 className='mb-4 text-center'>Our Exciting  Services Offering</h2>
        {services.map(service => (
          <div key={service.id} className="col-lg-2 " >
            <div className="col-lg-11 cards">
              <div>
                <img src={service.image} style={{ width: "80px" }} alt={service.title} />
                <h5 className='p-2'>{service.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
