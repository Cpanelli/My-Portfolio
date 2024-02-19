import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

const Resume = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h2" gutterBottom>
          Resume
        </Typography>
        <Box mb={3}>
          <Typography variant="body1" gutterBottom>
            Download my resume:
            {' '}
            <Link href="path/to/resume.pdf" download>
              Download PDF
            </Link>
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h4" component="h3" gutterBottom>
            Proficiencies
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="HTML" />
            </ListItem>
            <ListItem>
              <ListItemText primary="CSS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="JavaScript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="React" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Resume;
