import React from "react";
import laptop from "../assets/mockup2laptop 1.png";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import elt1 from "../assets/graphics-1.svg";
import elt2 from "../assets/graphics-2.svg";

const Hero = () => {
  return (
    <section className="my-5" style={{paddingTop:'150px'}}>
      <motion.div className="container mx-auto h-full ">
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2'>
          {/***text */}
          <div className='col'>
            <h1 className='display-1 fw-bold text-white text-center text-md-start'>Trade Smarter with Advanced Tools</h1>
            <p className='col-12 col-md-9 fs-5 fw-light text-white text-center text-md-start'>
              Empower your trading with our advanced platform. Explore
              cutting-edge tools for informed decision-making. Elevate your
              strategies with ease. Experience the future of trading.
            </p>
            <SearchBar/>
          </div>
          {/***image*/}
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 3,duration: 1,ease: "easeInOut" 
  }}  className='col d-flex align-items-center justify-content-center position-relative'  style={{minHeight:"300px"}}>
            <img className='img-fluid'  src={laptop} alt="" srcset="" />
            <img src={elt1} alt='element graphic 1' className=' d-none d-sm-inline img-fluid position-absolute' style={{top:'20%',left:'30%',transform:'translate(-50%,-50%)',}}/>
            <img src={elt2} alt='element graphic 2' className='d-none d-sm-inline img-fluid position-absolute'style={{top:'80%',left:'80%',transform:'translate(-50%,-50%)',}}/>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
