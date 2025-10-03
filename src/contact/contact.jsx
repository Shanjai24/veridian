import React from "react";
import { Box, Typography } from "@mui/material"; // Import Material-UI components

const ContactUs = () => {
  return (
    <Box
      className="Contact"
      id="Contact Us"
      sx={{
        backgroundColor: "#009065",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Contact Us
      </Typography>

      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      >
        Have questions or need more information? Reach out to us at.
      </Typography>

      <Box
      className="Email"
      onClick={() => window.location.href = "mailto:info@veridian.com"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00593B",
        borderRadius: "8px",
        padding: "10px 20px",
        gap: "10px",
        cursor: "pointer", // Makes the whole section clickable
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F0B90B",
          padding: "5px 10px",
          borderRadius: "4px",
          fontWeight: "bold",
          color: "#000000",
          fontSize: "12px",
        }}
      >
        MAIL TO
      </Box>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        info@veridian.com
      </Typography>
      <Box
        component="span"
        sx={{
          backgroundColor:'black',
          color: "#FFFFFF",
          fontSize: "20px",
        }}
      >
        ➔
      </Box>
    </Box>

      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "14px",
          fontStyle: "italic",
          marginTop: "10px",
        }}
      >
        'We're here to help!'
      </Typography>
    </Box>
  );
};

export default ContactUs;
