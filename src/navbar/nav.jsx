import React, { useState ,useEffect } from "react";
import logo from "./veridian-logo.png";
import { Box, Typography } from "@mui/material";
import "./nav.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const section = document.getElementById(activeLink);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeLink]);

  const handleClick = (link) => {
    setActiveLink(link);
    document.getElementById(link);
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className="nav">

      <Box sx={{display: "flex",alignItems: "center",flexDirection: "column"}}>
        <img
          src={logo}
          style={{ height: "40px", marginBottom: "10px" }}
        />
        <Typography className="gradient-text">
          VERIDIAN
        </Typography>
      </Box>

      <Box className="navigation">
        {["Home", "About Us", "Our Team", "Investment Approach", "Contact Us"].map(
          (link) => (
            <Typography
              key={link}
              onClick={() => handleClick(link)}
              sx={{
                fontSize: activeLink === link ? "16px" : "14px",
                textDecoration: activeLink === link ? "underline" : "none",
                color: activeLink === link ? "#009065" : "#333",
                textDecorationThickness: "2px",
                cursor: "pointer",
              }}
            >
              {link}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
