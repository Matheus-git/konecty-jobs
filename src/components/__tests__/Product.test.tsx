import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '@/components/ProductCard';
import '@testing-library/jest-dom/extend-expect';

describe('Product Component', () => {
  const product = { 
    id: 1, 
    name: 'Produto 1', 
    description: 'Descrição do Produto 1', 
    price: 10.00, 
    category: 'Categoria A', 
    imageUrl: "https://s3-alpha-sig.figma.com/img/1164/983c/339444a5a4c293835663f2b19c6240e3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXC6DcO51vE60vRZ~Mn2-~iIStl7Fx2TklgOH-uX6di~BXi-ebSVbmqzexagvqp8zRRdwFgiIMr2G-poGLH4EU1KpRk27x6-EuW0qKpl~QLJ7ZNypq55uodHIGKOjeshcE3PK6TGoo8~z1HOn1r-ItRx73FhKFgQ-zLPcdN5a9buGcgZjjyv~6veZXXSBij1-SY-yCcTXcKm045vyKnXFe17cjip~lDZugn4pgFCJRqvYPJa6~ujrxAH4OgG92x8QdaKccdCIYhHFopnmTuEmFT23E1-8pgxiHrwcIDVFpShqWM5ExnhhmQnOz08JyOy2XVN1~eZh7HeskHKwAORvA__" 
  };

  it('should render product name and description', () => {
    render(<Product {...product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });

  it('should render formatted price', () => {
    render(<Product {...product} />);
    expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
  });

  it('should render product image', () => {
    render(<Product {...product} />);
    const image = screen.getByAltText(product.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', product.imageUrl);
  });
});
