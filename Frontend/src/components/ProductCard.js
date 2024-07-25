import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardActionArea } from '@mui/material';
import Image1 from '../assets/product_category/sofa2.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../css/ProductCard.css'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <Card className='category-card' sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea component={Link} to={`/productdetail/${product.id}`}>
            <CardMedia
                component="img"
                height="200"
                image={product.image || Image1}
                alt={product.furnitureName}
                className="card-media-hover"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='furniture-name'>
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
                <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;