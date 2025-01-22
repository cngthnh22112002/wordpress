import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#4CAF50', elevation: 0 }}> {}
    <Toolbar>
      {}
      <Image src={logo} alt="Logo" height={40} width={40} />
      
      <Button variant="outlined" >Get Started</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
