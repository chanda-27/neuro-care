import { Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import homeMainBannerPicture1 from '../../images/homeMainBannerPicture1.jpg';
import homeMainBannerPicture2 from '../../images/homeMainBannerPicture2.jpg';
import homeMainBannerPicture3 from '../../images/homeMainBannerPicture3.jpg';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  const matches900px = useMediaQuery('(min-width:900px)');
  return (
    <Box sx={{color: '#122136', bgcolor: '#f0f8ff', py: 8}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true,
        }}
        autoplay={{
          "delay": 4000,
          "disableOnInteraction": false
        }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '50%',}}}>
                  <img src={homeMainBannerPicture1} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>Medinova Hospital in California</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">Professional Mental Health Advisors.</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>We are Providing Best Mental Health Services at Affordable Prices</Typography>
                  <Box py={3}>
                    <Button variant="outlined" color="secondary" size="large">Make an appointment</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '50%',}}}>
                  <img src={homeMainBannerPicture2} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>Medinova Hospital in California</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">Largest Private Mental Health Partner.</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>We are Providing Best Mental Health Services at Affordable Prices</Typography>
                  <Box py={3}>
                    <Button variant="outlined" color="secondary" size="large">Make an appointment</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '50%',}}}>
                  <img src={homeMainBannerPicture3} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>Medinova Hospital in California</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">Create Positive Change, Achieve High Results.</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>We are Providing Best Mental Health Services at Affordable Prices</Typography>
                  <Box py={3}>
                    <Button variant="outlined" color="secondary" size="large">Make an appointment</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
      </Swiper>
    </Box>
  );
};

export default Banner;