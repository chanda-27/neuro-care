import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import OurLocation from '../OurLocation/OurLocation';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Services></Services>
      <Review></Review>
      <OurLocation></OurLocation>
    </Box>
  );
};

export default Home;