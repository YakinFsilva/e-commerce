import React from 'react';
import Elo from "../assets/images-pay/Elo_4Cores_Neg.png";
import Hipercard from "../assets/images-pay/hipercard.png";
import Mastercard from "../assets/images-pay/master_card.png";
import Visa from "../assets/images-pay/visa.png";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        

    
           <h4>Formas de Pagamento</h4>
      <div className="pagamento">
   

        <img src={Elo} />
        <img src={Hipercard} />
        <img src={Mastercard} />
        <img src={Visa} />

      </div>
      </div>


      {/* Line */}
      <div className="footer-bottom">
        <span>

          © Copyright 2023.


        </span>
      </div>
    </footer>
  );
}

export default Footer;
