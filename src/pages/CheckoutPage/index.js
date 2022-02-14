import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {Header} from "../../components/Header/Header.js";
import UserContext from "../../contexts/UserContext";
import { checkout } from "../../services/galeriaQuadros.js";
import ModalError from "../../shared/ModalError.js";
import ModalSuccess from "../../shared/ModalSuccess.js";
import {CheckoutScreen, OptionContainer, Option, Title, Value, Amount, ButtonCheckout} from "./style";

export default function CheckoutPage(){
  const {productSelected, token} = useContext(UserContext);
  const [products, setProducts] = useState({
    list:[],
    amount: 0
  });
  const navigate = useNavigate();

  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [message, setMessage] = useState(false);  

  useEffect(()=>{
    let list=[], amount = 0;
    list = productSelected?.map((date, index)=>{
      amount += parseFloat(date.price);
      return(
        <Option key={index}>
          <img src={date.imageUrl} alt={date.name}/>
          <div>
            <span>{date.name}</span>
            <p>{date.artistName}</p>
          </div>
          <div>
            <p>valor:</p>
            <Value>{date.price}</Value>
          </div>
        </Option>
      );
    });
    setProducts({
      list: list,
      amount: amount
    });
  },[]);

  function handleCheckout(){
    const body = {...products};
    const promise = checkout(body,token);
    promise.then(()=>{
      setMessage('Compra realizada com sucesso');
      setModalSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    });
    promise.catch(()=>{
      setMessage('Ocorreu um erro, tente mais tarde')
      setModalError(true);
    });
  }
  return(
    <CheckoutScreen>
      <Header/>
      <Title>Finalize seu pedido</Title>
      <OptionContainer>
        {products.list}
      </OptionContainer>
      <Amount>
        <p>Valor total da compra:</p>
        <Value>{products.amount}</Value>
      </Amount>
      <ButtonCheckout onClick={handleCheckout}>Finalizar Compra</ButtonCheckout>
      {
        modalError ?
          <ModalError message={ message } setModal={ setModalError } />
        : ''
      }

      {
        modalSuccess ?
          <ModalSuccess message={ message } />
        : ''
      }
    </CheckoutScreen>
  );
}