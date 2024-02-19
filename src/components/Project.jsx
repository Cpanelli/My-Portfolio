import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <Card>
      <CardActionArea href={deployedLink} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Link href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</Link>
        <br />
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </CardContent>
    </Card>
  );
};

export default Project;
