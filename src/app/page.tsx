'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setCategories([...new Set(data.map((product: Product) => product.category))]);
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category: string) => {
    if (category) {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
