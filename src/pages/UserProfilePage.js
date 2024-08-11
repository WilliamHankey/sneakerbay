// UserProfilePage.js
import React from 'react';
import { Container, Grid, Typography, Paper, Button, Box } from '@mui/material';

function UserProfilePage() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>My Profile</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body2">Name: John Doe</Typography>
            <Typography variant="body2">Email: john.doe@example.com</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Edit Information
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Order History</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Order #12345 - $180.00 - Delivered</Typography>
              <Typography variant="body2">Order #67890 - $150.00 - Delivered</Typography>
            </Box>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              View All Orders
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserProfilePage;
