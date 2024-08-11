// CheckoutPage.js
import React from 'react';
import { Container, Grid, Typography, Paper, TextField, Button} from '@mui/material';

function CheckoutPage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <TextField fullWidth label="Full Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Address" variant="outlined" margin="normal" />
            <TextField fullWidth label="City" variant="outlined" margin="normal" />
            <TextField fullWidth label="Postal Code" variant="outlined" margin="normal" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <Typography variant="body2">Product 1: $90.00</Typography>
            <Typography variant="body2">Product 2: $90.00</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Total: $180.00</Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
