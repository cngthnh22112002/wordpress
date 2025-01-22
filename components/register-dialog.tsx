import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface RegisterDialogProps {
  open: boolean;
  onClose: () => void;
}

const RegisterDialog = ({ open, onClose }: RegisterDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Contact Us for Green Solutions</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please fill out the form below to contact us and learn more about our sustainable solutions.
        </Typography>
        <form>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
          />
          
          {/* Gender selection */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <Typography variant="body2">Gender</Typography>
            <RadioGroup row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </Button>
        <Button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;