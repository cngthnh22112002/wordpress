import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      py: 4,
      backgroundColor: '#4caf50',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="body1">&copy; 2025 BrandName. All rights reserved.</Typography>
  </Box>
);

export default Footer;