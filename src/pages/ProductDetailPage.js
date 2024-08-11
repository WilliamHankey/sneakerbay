import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button, Paper, Chip, Rating, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BuyIcon from '@mui/icons-material/Payment';
import StarIcon from '@mui/icons-material/Star';

const productData = {
  1: {
    name: "New Balance 327 Men's Shoe",
    price: "$90",
    description: "The New Balance 327 is a modern interpretation of a vintage running shoe...",
    images: ["https://placehold.co/200x150", "https://placehold.co/200x150", "https://placehold.co/200x150", "https://placehold.co/200x150"],
    sizes: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    colors: ['#000000', '#FFFFFF', '#808080', '#C0C0C0', '#FFA500', '#FF4500'],
    rating: 4.7,
    reviews: 1300,
  },
  // Additional products can be added here...
};

function ProductDetailPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = productData[id]; // Fetch the product details based on the ID
  const navigate = useNavigate(); // Hook to navigate programmatically

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Product not found!</Typography>
      </Container>
    );
  }

  const handleAddToBag = () => {
    // Logic to add the product to the shopping cart
    // Example: You might update the cart state here

    // Navigate to the shopping cart page
    navigate('/cart');
  };

  const handleBuyNow = () => {
    // Logic to handle the direct purchase
    // Example: You might update the cart and navigate to checkout

    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <Container maxWidth={false} sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section - Images and Description */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Grid container spacing={2}>
              {/* Product Images */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {product.images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {/* Product Description */}
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {product.price}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {product.description}
                </Typography>
                {/* Size Options */}
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Size
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {product.sizes.map((size) => (
                      <Chip key={size} label={size} clickable />
                    ))}
                  </Box>
                </Box>
                {/* Color Options */}
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Color
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {product.colors.map((color) => (
                      <Box
                        key={color}
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: color,
                          borderRadius: '50%',
                          cursor: 'pointer',
                          border: '1px solid #ccc',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                {/* Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" startIcon={<AddShoppingCartIcon />} color="primary" onClick={handleAddToBag}>
                    Add to Bag
                  </Button>
                  <Button variant="outlined" startIcon={<BuyIcon />} color="secondary" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right Section - Reviews and Additional Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">SneakerBay</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating value={product.rating} precision={0.1} readOnly />
              <Typography variant="h6" sx={{ ml: 1 }}>
                {product.rating}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              ({product.reviews} reviews)
            </Typography>
            {/* Review Breakdown */}
            {[5, 4, 3, 2, 1].map((star) => (
              <Box key={star} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="body2" color="textSecondary">
                  {star}
                </Typography>
                <StarIcon fontSize="small" sx={{ ml: 0.5, mr: 1 }} />
                <Box sx={{ flexGrow: 1, backgroundColor: '#eee', height: 8, borderRadius: 4, overflow: 'hidden' }}>
                  <Box sx={{ width: `${Math.random() * 50 + 50}%`, height: '100%', backgroundColor: '#FFC107' }} />
                </Box>
              </Box>
            ))}
          </Paper>
          {/* Additional Information */}
          <Paper sx={{ padding: 2 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Shipping & Returns</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  We offer free standard shipping on all orders over $50. We also offer express shipping for an additional fee. If you’re not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Product Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  The New Balance 327 features a combination of suede and nylon materials for a retro look. The cushioned midsole and rubber outsole provide comfort and durability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Reviews</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  Customers love the retro style and comfort of the New Balance 327. Some have noted that the sizing runs small, so consider ordering a half size up.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetailPage;
