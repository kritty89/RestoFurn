
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, refreshProducts }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                await axios.put(`/api/products/${product.id}`, { name, price, description });
            } else {
                await axios.post('/api/products', { name, price, description });
            }
            refreshProducts();
            setName('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.error('Error saving product', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ProductForm;

