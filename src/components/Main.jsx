// import React from 'react';
// import styles from './../styles/styles.css';
import './../styles/styles.css';


const Main = () => {
  const products = [
    
    {      
      id: 1,
      name: 'Produto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:'https://acdn.mitiendanube.com/stores/002/007/282/products/hyperview-011-a34c9c7106039a941d16956551387236-1024-1024.jpg',
      price: 299.99,
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://m.media-amazon.com/images/I/51Ieq0twp+L._AC_SX679_.jpg',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Produto 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://m.media-amazon.com/images/I/51q3Tgv5y6L._AC_SX385_.jpg',
      price: 299.99,
    },
    {
      id: 4,
      name: 'Produto 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://m.media-amazon.com/images/I/71yyu6LDgSL.__AC_SX300_SY300_QL70_ML2_.jpg',
      price: 299.99,
    },
    {
      id: 5,
      name: 'Produto 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.kabum.com.br/produtos/fotos/85197/85197_1484306076_gg.jpg',
      price: 299.99,
    },
    {
      id: 6,
      name: 'Produto 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.kabum.com.br/produtos/fotos/173898/fone-de-ouvido-edifier-tws-x5-bluetooth-microfone-duplo-estojo-recarregavel-ergonomico-resistente-a-agua-branco-x5_1626208487_gg.jpg',
      price: 299.99,
    },
    {
      id: 7,
      name: 'Produto 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.kabum.com.br/produtos/fotos/134179/cadeira-gamer-tempest-husky-gaming-white-700_1622138045_gg.jpg',
      price: 299.99,
    },
    {
      id: 8,
      name: 'Produto 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.kabum.com.br/produtos/fotos/104667/headset-gamer-razer-kraken-x-lite-p2_headset-gamer-razer-kraken-x-lite-p2_1569864643_gg.jpg',
      price: 299.99,
    },
    {
      id: 9,
      name: 'Produto 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images7.kabum.com.br/produtos/fotos/393217/notebook-asus-amd-ryzen-7-3700u-8gb-ram-ssd-256gb-15-6-full-hd-windows-11-cinza-m515da-br1454w_1668696490_m.jpg',
      price: 299.99,
    },
    {
      id: 10,
      name: 'Produto 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images0.kabum.com.br/produtos/fotos/364670/monitor-gamer-samsung-odyssey-g3-27-led-full-hd-165-hz-1ms-hdmi-displayport-freesync-premium-ajuste-de-altura-preto-ls27ag320nlxzd_1699279318_m.jpg',
      price: 299.99,
    },
    {
      id: 11,
      name: 'Produto 11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images6.kabum.com.br/produtos/fotos/309876/impressora-multifuncional-epson-ecotank-l6270-jato-de-tinta-wifi-wireless-ethernet-duplex-automatico-preto-c11cj61302_1645818214_m.jpg',
      price: 299.99,
    },
    {
      id: 12,
      name: 'Produto 12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.kabum.com.br/produtos/fotos/95567/95567_1521579672_m.jpg',
      price: 299.99,
    },
  ];

  return (
    <div className="productsBackground">
    <div className="productsContent">
      {products.map((product) => (
        <div key={product.id} className="productContainer">
          <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Main;
