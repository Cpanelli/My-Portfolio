// AboutMe.js
import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';

const AboutMe = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h2" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Avatar alt="Chris Panelli" src="path/to/my/photo.jpg" sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1">
              Hello! I'm Christopher Panelli, originally from Staten Island, NY, now living in Orlando, Florida.
              I have a diverse background in sales, construction, and serving, but I recently decided to pursue
              my passion for web development. I enrolled in a full stack web development class online offered by UCF,
              and I'm excited to showcase my skills through this React Portfolio project. Feel free to explore and
              learn more about me and my projects!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutMe;
