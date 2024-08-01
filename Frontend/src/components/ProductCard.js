import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardActionArea, Snackbar } from '@mui/material';
import Image1 from '../assets/product_category/sofa2.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../css/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state || { user: null };
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setOpenSnackbar(true);
        setTimeout(() => {
            navigate('/cart', { state: { user } });
        }, 1500);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Card className='category-card' sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea component={Link} to={`/productdetail/${product.id}`} state={{ user }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.coverImage || Image1}
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
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
            </CardActions>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
                message="Added to cart successfully"
            />
        </Card>
    );
};

export default ProductCard;
