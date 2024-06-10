import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const testimonials = [
  { id: 1, name: 'Jane Doe', feedback: 'Great platform for buying and selling furniture!' },
  { id: 2, name: 'John Smith', feedback: 'I love the eco-friendly aspect of this service.' }
];

const recyclingBenefits = [
  { id: 1, benefit: 'Reduces waste in landfills.' },
  { id: 2, benefit: 'Conserves natural resources.' },
  { id: 3, benefit: 'Saves energy.' }
];

const videos = [
  { id: 1, title: 'Why Recycling Matters', url: 'https://www.youtube.com/embed/1' },
  { id: 2, title: 'How to Recycle Furniture', url: 'https://www.youtube.com/embed/2' }
];

const Home = () => {
  return (
    <Container>
      {/* Company Information Section */}
      <Box my={5}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to RestoFurn
        </Typography>
        <Typography variant="body1" paragraph>
          RestoFurn is dedicated to providing a sustainable way to buy and sell furniture. Our mission is to reduce waste by giving new life to pre-owned furniture.
        </Typography>
      </Box>

      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          What we do
        </Typography>
        <Typography variant="body1" paragraph>
          We welcome donations from our users residing in GTA region. we accept furniture of any conditions close to usable, take in furniture to our warehouse, repair them and sell for affordable price.
        </Typography>
      </Box>

      {/* Testimonials Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recycling Benefits Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Benefits of Recycling Furniture
        </Typography>
        <Grid container spacing={3}>
          {recyclingBenefits.map((benefit) => (
            <Grid item key={benefit.id} xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{benefit.benefit}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Educational Videos Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Learn About Recycling
        </Typography>
        <Grid container spacing={3}>
          {videos.map((video) => (
            <Grid item key={video.id} xs={12} md={6}>
              <Card>
                <CardMedia
                  component="iframe"
                  alt={video.title}
                  height="300"
                  src={video.url}
                  title={video.title}
                />
                <CardContent>
                  <Typography variant="h6">{video.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;