import React from "react";
import phone from "../assets/phone-mockup-2-1.png";
import { motion } from "framer-motion"

const Features = () => {
  return (
    <>
      <div className="container text-white px-5 px-md-0 " style={{ marginTop: "200px" }}>
        <div className="text-center my-2">
          <h2 className="display-4 fw-bold">Key features</h2>
          <p className="fs-5 fw-light text-white">
            the app is packed with the latest technology in trading available on
            the market .
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 3,duration: .3,ease: "easeInOut" 
  }}
          className="text-centerrow row row-cols-1 row-cols-md-3 gap-0 row-gap-4 row-gap-md-0"
          style={{ marginTop: "150px" }}
        >
          <div
            className="col box-style bg-g-dark col overflow-y-visible position-relative"
            style={{ height: "400px" }}
          >
            <img
              src={phone}
              className="position-absolute bottom-0 start-50 translate-middle-x"
            />
          </div>
          <div className="col d-flex flex-column row-gap-4 justify-content-center align-items-center px-0 px-md-3 py-0">
            <div
              className="box-style w-100 bg-g-blue overflow-y-visible position-relative px-5 py-5 py-md-0 d-flex justify-content-center align-items-start flex-column gap-2"
              style={{ height: "45%" }}
            >
              <p className="display-4 fw-bold">$20BN</p>
              <p className="fw-light">in average daily liquidity</p>
            </div>
            <div
              className="box-style w-100 bg-g-blue overflow-y-visible position-relative px-5 py-5 py-md-0 d-flex justify-content-center align-items-start flex-column gap-2"
              style={{ height: "45%" }}
            >
              <p className="display-4 fw-bold">80+</p>
              <p className="fw-light">Currencies available</p>
            </div>
          </div>
          <div className="col box-style bg-g-dark overflow-y-visible position-relative d-flex justify-content-center align-items-center flex-column gap-0 py-5 py-md-0">
            <p className="fw-bold" style={{ color: "var(--green)",fontSize:'10vw',lineHeight:'1em' }}>
              0.0
            </p>
            <p className="fw-light">PiPs on low spreds</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Features;
