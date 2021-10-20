import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{bgcolor: '#122136', color: 'white'}}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2}}>SERVICES</Typography>
              <Box>Support Patients</Box>
              <Box>Dedicated Therapist</Box>
              <Box>Children Therapy</Box>
              <Box>Life Coaching</Box>
              <Box>Executive Coaching</Box>
              <Box>NLP Coaching</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2}}>EXPLORE MORE</Typography>
              <Box>Success Stories</Box>
              <Box>Dedicated Therapist</Box>
              <Box>Contact Us</Box>
              <Box>News and Updates</Box>
              <Box>Doctors List</Box>
              <Box>Therapy Services</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3}}>
              <Link to="/">
                <Box sx={{fontSize: 34}}>
                  <Box sx={{color: '#11b8ca'}}>NEURO</Box>
                  <Box sx={{color: '#ffb545', letterSpacing: '8px'}}>CARE</Box>
                </Box>
              </Link>
              <Box fontSize="18px" lineHeight="1.5">This Medicaid Care Coordination program unites both physical and behavioral health into a single entity to effectively coordinate services. This approach of team-based care and health neighborhoods is designed to improve patients’ health while reducing medical costs.</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{width: '100%', height: '1px', bgcolor: 'white'}}></Box>
      <Container maxWidth="lg">
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3}}>
          <Box>Chanda Biswas © 2021 All Right Reserved</Box>
          <Box sx={{fontSize: '30px', '& svg': {paddingLeft: '10px'}}}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;