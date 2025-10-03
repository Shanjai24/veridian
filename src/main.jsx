import React from "react";
import Home from "./home/home"; 
import { Box } from "@mui/material";
import Navbar from "./navbar/nav"; 
import AboutUs from "./aboutus/about";
import InvestmentApproach from "./investment/investment";
import ContactUs from "./contact/contact";
import App from "./app";

const Main = () => {
  return (
    <>
      <Box>
        <Navbar/>
        <Home/>
        <AboutUs/>
        <App/>
        <InvestmentApproach/>
        <ContactUs/>
      </Box>
    </>
  );
};

export default Main;
