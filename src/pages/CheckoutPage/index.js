import axios from "axios";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import {CheckoutScreen, OptionContainer, Option, Title, Value, Amount, ButtonCheckout} from "./style";

export default function CheckoutPage(){
  function handleCheckout(){
    const body = {
      products:[],
      amount: "sssss"
     };
     const config = {};
    const promise = axios.post("http://localhost:5000/checkout", body, config);
  }
  return(
    <CheckoutScreen>
      <Header></Header>
      <Navbar></Navbar>
      <Title>Finalize seu pedido</Title>
      <OptionContainer>
        <Option>
          <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_Rlt4ezbJ6X73.png.jpeg" alt="c"/>
          <div>
            <span>Tituloooooo</span>
            <p>autor</p>
          </div>
          <div>
            <p>valor:</p>
            <Value>100000</Value>
          </div>
        </Option>
        <Option>
          <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_Rlt4ezbJ6X73.png.jpeg" alt="c"/>
          <div>
            <span>Tituloooooo</span>
            <p>autor</p>
          </div>
          <div>
            <p>valor:</p>
            <Value>100000</Value>
          </div>
        </Option>
        <Option>
          <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_Rlt4ezbJ6X73.png.jpeg" alt="c"/>
          <div>
            <span>Tituloooooo</span>
            <p>autor</p>
          </div>
          <div>
            <div>valor:</div>
            <Value>100000</Value>
          </div>
        </Option>
      </OptionContainer>
      <Amount>
        <p>Valor total da compra:</p>
        <Value>100000</Value>
      </Amount>
      <ButtonCheckout onClick={handleCheckout}>Finalizar Compra</ButtonCheckout>
    </CheckoutScreen>
  );
}