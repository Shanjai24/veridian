import React from "react";
import { Box, Typography ,Grid2 } from "@mui/material";
import logo from "./veridian-logo.png";
import ex from "./Group 52.png";
import us from "./Group 53.png";
import ino from "./Group 54.png";
import int from "./Group 56.png";

const AboutUs = () => {
  return (
    <Box className="AboutUs" id="About Us"
      sx={{
        backgroundColor: "#D9EFE9",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
        scrollMarginTop: '70px',
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        About Us
      </Typography>

      <Box
        className="White box"
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "40px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#D9EFE9",
            padding: "35px",
            width: "450px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Veridian Logo"
            style={{
              height: "40px",
              marginBottom: "10px",
            }}
          />
          <Typography
            className="gradient-text"
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            VERIDIAN
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            Veridian is an investment, management, and development company based in
            Gibraltar. We create value in our investments by leveraging our own
            experience, using tried-and-true strategies and extensive industry
            expertise.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            We work with our business management team to develop and implement
            tailored strategies focused on strong products with powerful sales, to
            develop profit-generating growth models. Value creation is fundamental
            to our goal and we develop our businesses with this in mind.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            Veridian's expertise is delivered with a responsible approach to our
            business, our team, our local community, and the environment.
          </Typography>
        </Box>
      </Box>

      {/* 1st row */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", width: "100%" }}>
          <Grid2 sx={{
            backgroundColor: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "50%"
          }}>
            <Box sx={{ maxWidth: "420px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                Excellence
              </Typography>
              <Typography sx={{ marginTop: "10px", fontSize: "13px" }}>
                We strive for excellence by continuously honing our skills & expanding
                our knowledge. Our commitment to excellence drives innovation and
                quality, setting us apart as leaders in our field.
              </Typography>
            </Box>
            <Box>
              <img
                src={ex}
                alt="Excellence"
                style={{ maxWidth: "75%", height: "auto" }}
              />
            </Box>
          </Grid2>

          <Grid2 sx={{
            backgroundColor: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "50%"
          }}>
            <Box sx={{ maxWidth: "400px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                Initiative
              </Typography>
              <Typography sx={{ marginTop: "10px", fontSize: "13px" }}>
                We encourage a proactive mindset where our team is empowered to take
                initiative and pursue opportunities for growth. We drive creativity
                and transformative solutions.
              </Typography>
            </Box>
            <Box>
              <img
                src={int}
                alt="Initiative"
                style={{ maxWidth: "65%", height: "auto" }}
              />
            </Box>
          </Grid2>
        </Box>

        {/* 2nd Row */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", width: "100%" }}>
          <Grid2 sx={{
            backgroundColor: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "50%"
          }}>
            <Box sx={{ maxWidth: "420px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                Sustainability
              </Typography>
              <Typography sx={{ marginTop: "10px", fontSize: "13px" }}>
                We are dedicated to sustainable practices that positively impact our
                community and environment. Our commitment to responsibility ensures we
                contribute to a better future for generations to come.
              </Typography>
            </Box>
            <Box>
              <img
                src={us}
                alt="Sustainability"
                style={{ maxWidth: "75%", height: "auto" }}
              />
            </Box>
          </Grid2>

          <Grid2 sx={{
            backgroundColor: "#FFFFFF", padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "50%"
          }}>
            <Box sx={{ maxWidth: "400px" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                Integrity
              </Typography>
              <Typography sx={{ marginTop: "10px", fontSize: "13px" }}>
                We operate with honesty and uphold the highest ethical standards.
                Integrity is the cornerstone of our business, guiding our
                actions and decisions to earn the trust of our clients and partners.
              </Typography>
            </Box>
            <Box>
              <img
                src={ino}
                alt="Integrity"
                style={{ maxWidth: "65%", height: "auto" }}
              />
            </Box>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
