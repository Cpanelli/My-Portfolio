import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "path/to/project1.jpg",
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/chrispanelli/project1",
    },
    {
      title: "Project 2",
      image: "path/to/project2.jpg",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/chrispanelli/project2",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2" component="h2" gutterBottom>
          Portfolio
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>
                  <Link
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed Application
                  </Link>
                  <br />
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;
