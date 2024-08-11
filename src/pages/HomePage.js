// HomePage.js
import React from 'react';
import { Container, Grid, Typography, Paper, Button } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to SneakerBay
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discover the latest trends in footwear!
        </Typography>
        <Button variant="contained" color="primary" href="/products">
          Shop Now
        </Button>
      </Paper>

      <Grid container spacing={4}>
        {/* Featured Products */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <img src="https://placehold.co/200x200" alt="Featured Product 1" style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="h6" gutterBottom>Featured Product 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <img src="https://placehold.co/200x200" alt="Featured Product 2" style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="h6" gutterBottom>Featured Product 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <img src="https://placehold.co/200x200" alt="Featured Product 3" style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="h6" gutterBottom>Featured Product 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
