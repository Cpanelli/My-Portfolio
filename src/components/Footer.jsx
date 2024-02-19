// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          Connect with me:
        </Typography>
        {/* Add my social media or professional profile links here */}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
