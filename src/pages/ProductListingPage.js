// ProductListingPage.js
import React from 'react';
import { Container, Grid, Typography, Paper, Button } from '@mui/material';

function ProductListingPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>

      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product}>
            <Paper sx={{ padding: 2 }}>
              <img src={`https://placehold.co/200x200`} alt={`Product ${product}`} style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="h6" gutterBottom>Product {product}</Typography>
              <Button variant="outlined" color="primary" href={`/product/${product}`}>
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductListingPage;
