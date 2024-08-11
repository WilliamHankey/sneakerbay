// ShoppingCartPage.js
import React from 'react';
import { Container, Grid, Typography, Paper, Button, Box } from '@mui/material';

function ShoppingCartPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={4}>
        {[1, 2].map((item) => (
          <Grid item xs={12} key={item}>
            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <img src={`https://placehold.co/100x100`} alt={`Cart Item ${item}`} style={{ marginRight: 16 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">Product {item}</Typography>
                <Typography variant="body2">Size: 10</Typography>
                <Typography variant="body2">Color: Black</Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h6">$90.00</Typography>
                <Button variant="outlined" color="secondary" sx={{ mt: 1 }}>
                  Remove
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'right', mt: 4 }}>
        <Typography variant="h5">Subtotal: $180.00</Typography>
        <Button variant="contained" color="primary" href="/checkout" sx={{ mt: 2 }}>
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
}

export default ShoppingCartPage;
