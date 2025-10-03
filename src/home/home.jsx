import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box id="Home" sx={{padding:'20px'}}>
      <Box
        sx={{
          backgroundColor: "#009065",
          padding: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #F9C300",
            backgroundColor: "#F9C300",
            textAlign: "center",
            padding: "5px 10px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          <Typography sx={{ fontSize: "11px", color: "#FFFFFF" }}>
            INVESTMENT MANAGEMENT
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            maxWidth: "600px",
          }}
        >
          Empowering Investments with Expertise and Strategy
        </Typography>

        <Box
          component="button"
          sx={{
            backgroundColor: "#00563F",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#004C36",
            },
          }}
        >
          Know more
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
