// src/components/Product.tsx
import React from 'react';
import styles from './Product.module.css';

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
