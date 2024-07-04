import React from "react";
import { Fragment } from "react";
import HeaderSite from "./component/HeaderSite";
import Hero from "./component/Hero";
import ListIndices from "./component/ListIndices";
import bgimage from "../src/assets/BGsite.png";
import Features from "./component/Features";
import '../src/index.css';
import Demo from "./component/Demo";
import Onboarding from "./component/Onboarding";
import AppDownloadCta from "./component/AppDownloadCta";
import About from "./component/About";
import Footer from "./component/footer";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";


const App = () => {
  return (
    <KindeProvider
		clientId="b4388cd1213846009bcaf7436610f0b1"
		domain="https://andromedatradingapp.kinde.com"
		redirectUri="http://localhost:5174"
		logoutUri="http://localhost:5174"
	>
    <>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="min-vh-100"
      >
        <HeaderSite />
        
        <Hero />
        <ListIndices />
        <Features/>
        <Demo/>
        <Onboarding/>
        <AppDownloadCta/>
        <About/>
        <Footer/>
      </div>
    </></KindeProvider>
  );
};

export default App;
