import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../hooks/useFetch.interface';
import { ProductContextType, ProductProviderProps } from './Product.interface';

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/items");
                setAllProducts(response.data);
            } catch (error) {
                console.error('Error al cargar los productos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                allProducts,
                setAllProducts,
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
