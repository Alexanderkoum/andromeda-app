import React from "react";
import Button from "./Button";
import { motion } from "/framer-motion";

const Onboarding = () => {
  return (
    <>
      <div className="container text-white d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "200px" }}>
        <div className="text-center my-2">
          <h2 className="display-4 fw-bold">Simple steps to begin</h2>
          <p className="fs-5 fw-light text-white">
            we try to make evening simple to facilitate your onboarding
          </p>
        </div>
        <div className="row pt-5 gap-3 gap-md-0 mt-5" style={{ marginTop: "50px",marginBottom: '50px' }}>
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 3,duration: .3,ease: "easeInOut" 
  }} className="col">
            <div className="box-style bg-g-blue d-flex justify-content-center align-items-start py-4 gap-4 ">
              <div className="numb-style">1</div>
              <div>
                <h4>Create you account</h4>
                <p>Sign up and unlock the power of our platform.</p>
              </div>
            </div>
            <div className="path position-relative d-none d-md-flex" style={{ height: "180px" }}>
              <div className="svg position-absolute top-0 start-50">
                <svg
                  width="162"
                  height="126"
                  viewBox="0 0 162 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M146 118C146 122.418 149.582 126 154 126C158.418 126 162 122.418 162 118C162 113.582 158.418 110 154 110C149.582 110 146 113.582 146 118ZM0 119.5L154 119.5V116.5L0 116.5L0 119.5Z"
                    fill="#48D845"
                  />
                  <line
                    x1="1.5"
                    y1="120"
                    x2="1.5"
                    stroke="#48D845"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 4,duration: .3,ease: "easeInOut" 
  }}className="col">
            <div className="path position-relative d-none d-md-flex" style={{ height: "180px" }}>
              <div className="svg position-absolute bottom-0 start-50">
                <svg
                  width="162"
                  height="142"
                  viewBox="0 0 162 142"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M146 8C146 12.4183 149.582 16 154 16C158.418 16 162 12.4183 162 8C162 3.58172 158.418 0 154 0C149.582 0 146 3.58172 146 8ZM0 9.5L154 9.5V6.5L0 6.5L0 9.5Z"
                    fill="#48D845"
                  />
                  <line
                    x1="1.5"
                    y1="142"
                    x2="1.5"
                    y2="8"
                    stroke="#48D845"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
            <div className="box-style bg-g-blue d-flex justify-content-center align-items-start py-4 gap-4 ">
              <div className="numb-style">2</div>
              <div>
                <h4>Send Your Documents</h4>
                <p>Provide the required documents securely.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 5,duration: .3,ease: "easeInOut" 
  }} className="col">
            <div className="box-style bg-g-blue d-flex justify-content-center align-items-start py-4 gap-4 ">
              <div className="numb-style">3</div>
              <div>
                <h4>Review of Documents</h4>
                <p>Our team carefully verifies your information.</p>
              </div>
            </div>
            <div
              className="path position-relative d-none d-md-flex"
              style={{ height: "180px" }}
            >
              <div className="svg position-absolute top-0 start-50"></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} transition={{
    delai: 6,duration: .3,ease: "easeInOut" 
  }} className="col">
            <div className="path position-relative d-none d-md-inline-block" style={{ height: "180px" }}>
              <div className="svg position-absolute bottom-0 start-0">
                <svg
                  width="167"
                  height="136"
                  viewBox="0 0 167 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M159 120C154.582 120 151 123.582 151 128C151 132.418 154.582 136 159 136C163.418 136 167 132.418 167 128C167 123.582 163.418 120 159 120ZM157.5 3L157.5 128L160.5 128L160.5 3L157.5 3Z"
                    fill="#48D845"
                  />
                  <line
                    y1="1.5"
                    x2="159"
                    y2="1.5"
                    stroke="#48D845"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
            <div className="box-style bg-g-blue d-flex justify-content-center align-items-start py-4 gap-4 ">
              <div className="numb-style">4</div>
              <div>
                <h4>Fund Account</h4>
                <p>Deposit funds and start your trading journey with confidence.</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Button children='open account'/>
      </div>
    </>
  );
};

export default Onboarding;
