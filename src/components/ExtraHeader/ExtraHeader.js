import { Box } from '@mui/system';
import React from 'react';

const ExtraHeader = () => {
  return (
    <Box sx={{color: 'white', bgcolor: '#122136', fontSize: 15, textAlign: 'center'}}>
      <Box sx={{padding: 1}}>
        <Box>Register for the COVID vaccine today</Box>
      </Box>
    </Box>
  );
};

export default ExtraHeader;