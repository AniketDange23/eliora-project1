






import WhatsAppButton from './WhatsAppButton';




const Home = () => {
  return (
    <div className="container-fluid  g-0  ">
      <div className="row g-0  d-flex justify-content-center align-content-center text-center ">
      <div className="col-lg-4 m-2">
          <img
            src="/images/offer.png"
            alt="logo"
            style={{ maxWidth: "400px" }}
          />
          <h1 className="offer zoom"> Only   6999/-</h1>
        </div>
        <div className="col-lg-6 mt" style={{ textAlign: "justify" }}>
          <h1 className="mx-5">Design Your Website</h1>
          <h4 className='mx-5'>
            Get online with your business
          </h4>
          <p className='mx-5'>
            "Discover a world where creativity meets functionality. With our
            expertise, we craft stunning websites tailored to your vision. From
            sleek designs to seamless user experiences, we're dedicated to
            bringing your online presence to life. Whether you're a small
            business, an artist, or an entrepreneur, our team is here to help
            you stand out in the digital landscape. Let us transform your ideas
            into reality, with attention to detail and a passion for innovation.
            Elevate your brand, engage your audience, and unlock the full
            potential of your online platform. Your journey to online success
            starts here."
          </p>
          <button className="mx-5 align-content-center" >
            Contact
          </button>
        </div>{" "}
        {/* <div className="col-lg-4 m-2">
          <img
            src="/images/offer.png"
            alt="logo"
            style={{ maxWidth: "400px" }}
          />
          <h1 className="offer zoom"> Only   6999/-</h1>
        </div> */}
      </div>
      <WhatsAppButton/>
    </div>
  );
};

export default Home;
