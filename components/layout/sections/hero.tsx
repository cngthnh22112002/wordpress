'use client'
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import RegisterDialog from "@/components/register-dialog";

export const HeroSection = () => {
  const [open, setOpen] = useState(false); // State to control modal visibility

  // Handle opening and closing of the modal
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
          mb: 4
        }}
      >
        <Box/>
        <Typography variant="h2" fontWeight="bold" gutterBottom className="hero-title">
          Green Solutions for a Sustainable Future
        </Typography>
        <Typography variant="h6" className="hero-subtitle">
          Providing eco-friendly materials and services to protect and preserve our environment.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: 3 }}
          onClick={handleClickOpen}
        >
          Explore Our Services
        </Button>
      </Box>

      {/* Modal for Registration Form */}
      <RegisterDialog open={open} onClose={handleClose} />
    </>
  );
};
