import React from "react";
import video from "../assets/demo-video.svg";
import Button from "./Button";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <>
      <div className="container text-white" style={{ marginTop: "200px" }}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
        <motion.img initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 3,duration: .3,ease: "easeInOut" 
  }} class='img-fluid' src={video} alt="video presentation"/>
        <p className='my-5 w-100 w-sm-50 text-center fs-5 fw-light'>the only platform that offers all the best tools , at an affordable price to help you start winning at your trades.</p>
        <Button children='open account'/></div>
      </div>
      
    </>
  );
};

export default Demo;
