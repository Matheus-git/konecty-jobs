import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="card p-4 bg-white text-black border border-gray-200 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={name}
        className="bg-cover h-48 object-cover"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-blue-500 font-bold mt-2">R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
    </div>
  );
};

export default ProductCard;
