import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.coverImage}
                alt={product.furnitureName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.furnitureName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View Details</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;