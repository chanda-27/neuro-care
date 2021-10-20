import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';

const SingleService = () => {
  // Get URL parameters
  const { serviceId } = useParams();
  const data = fakeData.find(data => data.id === parseInt(serviceId));
  const { title, short_description, image, long_description, price } = data;
  return (
    <Box>
      <Box sx={{bgcolor: '#f0f8ff', py: 8}}>
        <Container maxWidth="lg">
          <Box sx={{mx: 'auto', maxWidth: '65%', '& img': {width: '100%', borderRadius: '10px'}}}>
            <img src={image} alt={title} />
          </Box>
        </Container>
      </Box>
      <Box sx={{bgcolor: 'white', p: 3}}>
        <Box sx={{textAlign: 'center', py: 5}}>
          <Typography component="h1" variant="h2" sx={{color: '#122136'}}>{title}</Typography>
          <Typography component="span" sx={{fontSize: '17px', color: '#122136', maxWidth: '65%'}}>{short_description}</Typography>
        </Box>
        <Box p={2}>
          {
            long_description.map(description => {
              return (
                <Typography component="p" sx={{fontSize: '18px', lineHeight: 1.5}} key={Math.random()}>{description}</Typography>
              );
            })
          }
          <Box textAlign="center" py={5}>
            <Typography component="h1" variant="h2">Price: {price} Taka</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleService;