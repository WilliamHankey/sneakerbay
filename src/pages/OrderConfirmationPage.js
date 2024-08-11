// OrderConfirmationPage.js
import React from 'react';
import { Container, Typography, Paper, Button, Box } from '@mui/material';

function OrderConfirmationPage() {
  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Thank You for Your Order!</Typography>
        <Typography variant="h6" gutterBottom>Your order number is #12345</Typography>
        <Typography variant="body1" gutterBottom>
          You will receive an email confirmation shortly with your order details.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Estimated Delivery: 5-7 business days
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" href="/products">Continue Shopping</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default OrderConfirmationPage;
