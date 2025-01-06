'use client'; 

import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Typography, Box, Button } from '@mui/material';
import RegisterDialog from '../../components/RegisterModal'; // Import modal component

export default function Home() {
  const [open, setOpen] = useState(false); // State to control modal visibility

  // Handle opening and closing of the modal
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Green Solutions for a Sustainable Future</title>
        <meta name="description" content="Eco-friendly services providing green materials to protect the environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1707648920432-80b76bd6e14f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Image with nature or eco-friendly theme
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: 4,
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Adding a semi-transparent overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly darken the background
          }}
        />
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
          Green Solutions for a Sustainable Future
        </Typography>
        <Typography variant="h6" color="white" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
          Providing eco-friendly materials and services to protect and preserve our environment.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: 3, position: 'relative', zIndex: 1 }}
          onClick={handleClickOpen} // Open modal when clicked
        >
          Explore Our Services
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Green Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3,
            flexWrap: 'nowrap', // Prevent wrapping into multiple rows
          }}
        >
          {['Sustainable Building Materials', 'Eco-friendly Packaging', 'Recycled Products'].map((feature, index) => (
            <Box
              key={index}
              sx={{
                width: '30%',  // Ensure that each feature box takes up 30% of the container width
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                backgroundColor: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                marginBottom: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature}
              </Typography>
              <Typography color="text.secondary">
                Our services provide sustainable solutions, such as eco-friendly building materials, recyclable packaging, and products made from recycled materials.
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Modal for Registration Form */}
      <RegisterDialog open={open} onClose={handleClose} />
    </>
  );
}