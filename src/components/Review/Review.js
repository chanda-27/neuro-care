import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Review = () => {
  return (
    <Box sx={{bgcolor: '#11b8ca', color: 'white', textAlign: 'center'}}>
      <Container maxWidth="lg">
        <Box sx={{p: 5}}>
          <Typography component="h4" variant="h4" sx={{borderBottom: '1px solid white', py: 2}}>A Word From Our Client</Typography>
          <Box sx={{py: 3, '& img': {borderRadius: '50%'}}}>
            <img src="https://i.ibb.co/F0YjK9F/pexels-christina-morillo-1181690.jpg" alt="Annonciatta Mukabaranga" />
            <Typography component="h5" variant="h5">Annonciatta Mukabaranga</Typography>
            <Box sx={{fontSize: '18px', lineHeight: '1.5'}}>I was looking for a dependable Joint Replacement Surgeon and met Dr. Sandeep Wasnik a specialist of joint replacement and Trauma Surgeon. With my first visit with x-rays, this young doctor in his mid thirties with articulate words have convinced me that I have come to the correct doctor at the correct time. When I learned that he is an MS from prestigious King Edward Memorial Medical College of Mumbai with specialization in knee replacement surgery with a fellowship from Germany, I decided to go under his care.</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Review;