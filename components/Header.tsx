import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Image from 'next/image'; // Use next/image for optimized images

import logo from '../public/logo.png'; // Import logo

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#4CAF50', elevation: 0 }}> {/* Green background */}
    <Toolbar>
      {/* Logo */}
      <Image src={logo} alt="Logo" height={40} width={40} />
      
      <Button
        color="inherit" 
        variant="outlined" 
        sx={{
          marginLeft: 'auto',
          borderColor: 'white', // Make the button border white for contrast
          color: 'white', // White text for contrast
          '&:hover': {
            backgroundColor: 'white', // Hover effect for the button
            color: '#4CAF50', // Change text color to green on hover
          },
        }}
      >
        Get Started
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
