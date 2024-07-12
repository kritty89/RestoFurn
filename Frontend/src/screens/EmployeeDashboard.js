
import React, { useState, useEffect } from 'react';
import apiService from '../components/apiService';
import ProductForm from '../components/ProductForm';

const EmployeeDashboard = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await apiService.fetchProducts();
            setProducts(response);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    const handleDelete = async (id) => {
        try {
            await apiService.delete(`${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div>
            <h2>Employee Dashboard</h2>
            <ProductForm product={selectedProduct} refreshProducts={fetchProducts} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeDashboard;
