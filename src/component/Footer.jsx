import React from "react";
import logo from '../assets/logo-andromeda.svg'
import Button from "./Button";

const Footer = () => {
  return (
    <div className='bg-white bg-opacity-10'>
      <div className="container text-white" style={{ marginTop: "200px", paddingTop: '100px', paddingBottom: '100px' }}>
        <div>
            <img src={logo} alt="logo andromeda" />
        </div>
        <div className="row row-cols-2 row-cols-sm-4 row-cols-md-4 row-gap-1">
            <div className="col py-5">
                <h4>Account type</h4>
                <ul style={{listStyleType:'none',listStylePosition:'outside'}} className='p-0 py-3 m-0' >
                    <li>Actions</li>
                    <li>Crypto</li>
                    <li>Forex</li>
                    <li>Indices</li>
                </ul>
            </div>
            <div className="col py-5">
                <h4>Produits</h4>
                <ul style={{listStyleType:'none',listStylePosition:'outside'}} className='p-0 py-3 m-0' >
                    <li>Graphique</li>
                    <li>Language pine script</li>
                    <li>Screener Forex</li>
                    <li>Sparks</li>
                </ul>
            </div>
            <div className="col py-5">
                <h4>Support</h4>
                <ul style={{listStyleType:'none',listStylePosition:'outside'}} className='p-0 py-3 m-0' >
                    <li>Send us an email</li>
                    <li>Chat with us</li>
                    <li>Call us</li>
                </ul>
            </div>
            <div className="col py-5">
                <h4>Let's do it</h4>
                <Button children='start here'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
