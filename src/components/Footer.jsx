import Boleto from "../assets/images-pay/boleto.png"
import Hipercard from "../assets/images-pay/hipercard.png"
import Mastercard from "../assets/images-pay/master_card.png"
import Visa from "../assets/images-pay/visa.png"
import "../styles/styles.css"

const Footer = () => {
  return (
    
    <div>
      <div className="footer">
          <span>Formas de pagamento</span>
        </div>
      <div className="pagamento">
        <img src={Boleto} />
        <img src={Hipercard} />
        <img src={Mastercard} />
        <img src={Visa} />  
    </div>

      <div>
        <span>&copy; 2023</span>
      </div>  
         
        </div>
        
  )
  
}

export default Footer