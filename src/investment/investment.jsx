import React from "react";
import { Box, Typography } from "@mui/material";
import inves1 from "./investment (1).png";
import inves2 from "./investment (2).png";
import inves3 from "./investment (3).png";

const InvestmentApproach = () => {
  return (
    <Box
      className="investment"
      id="Investment Approach"
      sx={{
        backgroundColor: "#D9EFE9",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "0px",
        scrollMarginTop: '70px'
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
        Holistic Investment Approach
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          padding: "40px",
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            padding: "20px",
          }}
        >
          <img src={inves1} style={{ width: "290px", height: "180px" }} alt="Investment focus and strategy" />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>
            Investment focus and strategy
          </Typography>
          <Typography sx={{ fontSize: "12px", lineHeight: "1.6", marginTop: "15px" }}>
            Veridian focuses on companies across a number of different sectors, predominantly
            internet-based companies with long-term growth potential, with the aim of releasing
            the potential of businesses, sustainably improving operations, and generating significant
            growth and profitability.
          </Typography>
          <Typography sx={{ fontSize: "12px", lineHeight: "1.6", marginTop: "10px" }}>
            Our investment strategy creates value at every stage of an investment. Utilizing the
            strengths of our industry-experienced team, Veridian has crafted a streamlined process
            from identifying potential opportunities through due diligence and deal documentation and
            onward to integration and transformation. Veridian’s unique combination of people and processes
            is market-tested to generate and release significant value and growth.
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            padding: "20px",
          }}
        >
          <img src={inves2} style={{ width: "290px", height: "180px" }} alt="Portfolio" />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>Portfolio</Typography>
          <Typography sx={{ fontSize: "12px", lineHeight: "1.6", marginTop: "15px" }}>
            The central investment of Veridian is in the Pragmatic Play group
            of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play
            is a world-leading game developer providing player-favorites to the most
            successful global brands in the iGaming industry.
          </Typography>
          <Typography sx={{ fontSize: "12px", lineHeight: "1.6", marginTop: "10px" }}>
            Powering up new possibilities of play through one single API, Pragmatic Play
            offers a multi-product portfolio of award-winning slots, live casino, bingo,
            virtual sports, sportsbook, and more, available in all major regulated markets,
            languages, and currencies. Driven by persistence to craft immersive experiences and
            responsible thrills, Pragmatic Play’s professional team consistently deliver best-in-class
            services to its partners worldwide with a dedication to creating games that players love time and time again.
          </Typography>
        </Box>

        {/* Card 3 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            padding: "20px",
          }}
        >
          <img src={inves3} style={{ width: "290px", height: "180px" }} alt="Responsible Investing" />
          <Typography sx={{ fontWeight: "bold", marginTop: "15px" }}>Responsible Investing</Typography>
          <Typography sx={{ fontSize: "12px", lineHeight: "1.6", marginTop: "10px" }}>
            Veridian supports responsible investing and evaluates environmental, social, and
            governance issues in its investments. Veridian believes that responsible investing
            and return on investment go together, and consideration of ESG issues improves portfolio
            company performance and investment results.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentApproach;
