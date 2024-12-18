import { useTheme } from '@emotion/react';
import { alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import React from 'react';

function OurTeamCard({ TeamMemberName, Info1 , Info2, Image, Designation, paraRef, maxHeight }) {
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor:'#D9EFE9'}}>
          <Box
      sx={{
        textAlign: 'start',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        // boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.2)}`,
        overflow: 'hidden',
        backgroundColor: theme.palette.background.white,
        minHeight: { xs: 'auto', md: '250px' },
        transform: {
          xs: 'skew(0deg)',
          md: 'skew(-20deg) translate(55px) ',
        },
        width: {
          xs: '100%',
          md: '85%',
        }
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          spacing: 2,
          position: { xs: 'relative', md: 'absolute' },
          top: { xs: '0', md: 'auto' }, 
          bottom: { xs: '0', md: '0' },
          left: '0%',
          transform: {
            xs: 'skew(0deg)',
            md: 'skew(20deg)',
          },
          zIndex: 0,
        }}
      >

        <Box
          sx={{
            width: '100%',
            maxHeight: { xs: '300px', md: '350px' },
            overflow: 'hidden', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <img
            src={Image}
            alt="team member"
            style={{
              width: '80%',
              height: '85%',
              objectFit: 'contain',
              zIndex: -10,
              transform: 'translateX(-50px)',
            }}
          />
        </Box>

        {/* Name and Designation Box */}
        {/* ND box */}
        <Box
          sx={{
            alignSelf: 'end',
            whiteSpace: 'nowrap',
            backgroundColor: theme.palette.primary.dark,
            padding: '10px',
            transform: 'skew(-30deg)',
            paddingX: { xs: '50%', md: '120px' },
            paddingLeft: { xs: '75%' },
            position: { xs: 'relative', md: 'absolute' },
            left: { xs: '-17%', md: '45%' },
            zIndex: -20,
            minHeight: '60px',
            display: { xs: 'block', md: 'flex' }, // Flex container
            flexDirection: 'column', // Stack vertically
            alignItems: { xs: 'center', md: 'flex-start' }, // Align content to the start (left)
            justifyContent: 'center', // Center content vertically
            width: { xs: '160%', md: '45%' }, // Adjust width for xs without affecting md
            marginBottom: { xs: '0%', md: '10px' },
          }}
        >
          <Typography
            sx={{
              transform: 'skew(30deg)',
              color:"white",
              fontSize: '15px',
              textAlign: 'left', // Explicitly left-align text
            }}
          >
            {TeamMemberName}
          </Typography>
          <Typography
            sx={{
              transform: 'skew(30deg)',
              color:"white",
              fontSize: '13px',
              textAlign: 'left',
              fontFamily: theme.typography.fontFamilySecondary,
            }}
          >
            {Designation}
          </Typography>
        </Box>
        
      </Box>

      <Box
        ref={paraRef} 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: { xs: '100%', md: '70%' },
          marginLeft: { md: '22%' },
          marginTop: '10px',
          color: theme.palette.text.tertiary,
          transform: {
            xs: 'skew(0deg)',
            md: 'skew(20deg)',
          },
          height: maxHeight ? `${maxHeight}px` : 'auto',
        }}
      >
        <Typography sx={{ marginBottom: '8px', fontSize: { xs: '14px', md: '15px' }, fontFamily: theme.typography.fontFamilySecondary ,color: '#717B85'}}>
          {Info1}
        </Typography>
        {Info2 && <Typography sx={{ fontSize: { xs: '14px', md: '15px' }, fontFamily: theme.typography.fontFamilySecondary,color: '#717B85' }}>
          {Info2}
        </Typography>}
      </Box>
    </Box>
    </Box>
  );
}

export default OurTeamCard;
