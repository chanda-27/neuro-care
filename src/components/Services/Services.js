import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData.json';

const Services = () => {
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{color: '#122136'}}>
              <Typography component="h4" variant="h4">Popular Counseling Services</Typography>
              <Box>Counseling is a collaborative process that involves the development of a confidential professional relationship that focuses on personal problems.</Box>
            </Box>
            <Box sx={{width: '35%', textAlign: 'right'}}>
              <Button variant="outlined" color="secondary">More Services</Button>
            </Box>
          </Box>
        </Box>
        <Box py={3}>
          <Grid container>
            {
              fakeData.map(data => {
                const { id, title, short_description, image } = data;
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                    <Box sx={{p: 1, '&:hover > div > button > img': {transition: '2s transform linear', MozTransition: '2s transform linear', WebkitTransition: '2s transform linear', transform: 'scale(1.3)'}}}>
                      <Card sx={{'& > button > div': {bgcolor: 'white', zIndex: 999, pt: 5}}}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={image}
                            alt={title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {short_description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Link to={`/service/${id}`}>
                            <Button size="small" color="primary">
                              Details
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Box>
                  </Grid>
                );
              })
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;