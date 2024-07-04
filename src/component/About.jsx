import React from "react";
import profile from "../assets/profile-david.svg";
import elt1 from "../assets/graphics-1.svg";
import elt2 from "../assets/graphics-2.svg";
import forbes from "../assets/Forbes-logo.svg";
import tnyt from "../assets/The-New-York-Times.svg";
import bloomberg from "../assets/Bloomberg.svg";

const About = () => {
  return (
    <>
      <div className="container text-white overflow-md-hidden px-5 px-md-0" style={{ marginTop: "200px" }}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 d-flex align-items-stretch">
          <div className="col">
            <h2 className="display-4 fw-bold mb-5">About</h2>
            <p className="fs-5 fw-light text-white">
              Welcome to Andromeda, revolutionizing technology since 2016. Our
              innovative products blend functionality, aesthetics, and user
              experience. Experience cutting-edge solutions that enhance daily
              life. Our commitment to sustainability is at the core of
              everything we do. We are dedicated to minimizing our environmental
              impact by incorporating eco-friendly practices throughout our
              product lifecycle. From responsible sourcing of materials to
              energy-efficient manufacturing processes, we strive to make a
              positive difference for the planet.
            </p>
            <p className="fs-5 fw-light text-white">
              Join us on our mission to shape the future. Experience the
              limitless possibilities of Andromeda, where innovation,
              sustainability, and collaboration come together to create a better
              tomorrow.
            </p>
          </div>
          <div className="col position-relative p-5 p-md-0 d-none d-md-flex" style={{minHeight:'535px'}}>
            <img src={profile} alt="profile david" className='img-fluid position-absolute' style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',}}/>
            <img src={elt1} alt='element graphic 1' className='img-fluid position-absolute' style={{top:'0%',left:'20%',transform:'translate(-50%,-50%)',}}/>
            <img src={elt2} alt='element graphic 2' className='img-fluid position-absolute'style={{top:'80%',left:'80%',transform:'translate(-50%,-50%)',}}/>
            <div className="box-style bg-g-blue rounded p-3 position-absolute" style={{top:'80%',left:'10%',transform:'translate(-50%,-50%)',}}>
                <h5>David <span className='fs-bold'>Hofferman</span></h5>
                <p>CEO-Founder</p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-wrap gap-5 mt-5'>
            <img className='img-fluid' src={forbes} alt="Forbes" />
            <img className='img-fluid' src={tnyt} alt=" The new-york time" />
            <img className='img-fluid' src={bloomberg} alt="Bloomberg logo" />
        </div>
      </div>
    </>
  );
};

export default About;
