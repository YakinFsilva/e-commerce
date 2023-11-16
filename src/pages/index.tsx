
import React from 'react';
import Product from "../components/Product";
import styles from "../components/Product.module.css";
// import App from "./App";


const Home: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Gabinete Gamer',
      description: 'descrição',
      image:'https://acdn.mitiendanube.com/stores/002/007/282/products/hyperview-011-a34c9c7106039a941d16956551387236-1024-1024.jpg',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'descrição',
      image: 'https://acdn.mitiendanube.com/stores/002/007/282/products/hyperview-011-a34c9c7106039a941d16956551387236-1024-1024.jpg',
      price: 29.99,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'descrição',
        image: 'https://acdn.mitiendanube.com/stores/002/007/282/products/hyperview-011-a34c9c7106039a941d16956551387236-1024-1024.jpg',
        price: 29.99,
      },
    
  ];

  return (
       
   <div className={styles.productsContent}>
      
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    
  );
};

export default Home;
