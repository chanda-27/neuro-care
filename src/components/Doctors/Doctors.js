import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctors from '../../images/doctors.jpg';
import doctor1 from '../../images/doctor1.jpg';
import doctor2 from '../../images/doctor2.jpg';
import doctor3 from '../../images/doctor3.jpg';
import doctor4 from '../../images/doctor4.jpg';
import doctor5 from '../../images/doctor5.jpg';
import doctor6 from '../../images/doctor6.jpg';

const Doctors = () => {
  const imageHeight = "250";
  return (
    <Box>
      <Box sx={{bgcolor: '#f0f8ff', py: 8}}>
        <Container maxWidth="lg">
          <Box sx={{mx: 'auto', maxWidth: '65%', '& img': {width: '100%', borderRadius: '10px'}}}>
            <img src={doctors} alt="Doctors" />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{bgcolor: 'white', px: 1, py: 3}}>
          <Box sx={{textAlign: 'center', py: 5}}>
            <Typography component="h1" variant="h2" sx={{color: '#122136'}}>Our Doctors</Typography>
            <Typography component="span" sx={{fontSize: '17px', color: '#122136', maxWidth: '65%'}}>
              This Medicaid Care Coordination program unites both physical and behavioral health into a single entity to effectively coordinate services. This approach of team-based care and health neighborhoods is designed to improve patients’ health while reducing medical costs.
            </Typography>
          </Box>
          <Box p={2}>
            <Box py={5}>
              <Grid container>

                {/* 1st */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor1}
                          alt="Dr. Mary Joe"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Mary Joe
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">FOUNDER CEO</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

                {/* 2nd */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor2}
                          alt="Dr. Kate Morison"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Kate Morison
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">SR. PSYCHOLOGIST</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

                {/* 3rd */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor3}
                          alt="Dr. Elianna Ed"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Elianna Ed
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">Clinical Doctor</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

                {/* 4th */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor4}
                          alt="Dr. Charlie James"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Charlie James
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">SR. PSYCHOLOGIST</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

                {/* 5th */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor5}
                          alt="Dr. Hekim Reswa"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Hekim Reswa
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">SR. PSYCHOLOGIST</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

                {/* 6th */}
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{p: 3}}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height={imageHeight}
                          image={doctor6}
                          alt="Dr. Saro Moris"
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h5" component="div">
                            Dr. Saro Moris
                          </Typography>
                          <Typography variant="h6" component="div" color="text.secondary">SR. PSYCHOLOGIST</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Doctors;