import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { IconContext } from "react-icons/lib";
import { AiOutlineExport } from 'react-icons/ai';
import { logOutPromise } from "../../services/galeriaQuadros";
import { useState } from "react/cjs/react.development";
import ModalError from "../../shared/ModalError.js";
import ModalSuccess from "../../shared/ModalSuccess.js";

export default function OptionsWindow({setShowWindow}){
  const {token, user, setToken, setUser} = useContext(UserContext);
  
  const navigate = useNavigate();

  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [message, setMessage] = useState(false);  

  function handleLogOut(){
    const promise = logOutPromise(token);
    promise.then(()=>{
      localStorage.removeItem("nameGQ");
      localStorage.removeItem("emailGQ");
      localStorage.removeItem("tokenGQ");
      setToken(null);
      setUser(null);
      setMessage('Saindo da conta');
      setModalSuccess(true);
      navigate("/");
    });
    promise.catch((err)=>{
      console.log(err);
      setMessage('Ocorreu um erro, tente mais tarde');
      setModalError(true);
    });
  }
  
  return(
    <IconContext.Provider value={{className: "react-icons"}}>
      <Container onClick={()=> setShowWindow(false)}></Container>
      <Window>
        <div>
          <FaUserAlt/>
            {(token)? 
            <p>{user.name}</p> : 
            <p onClick={()=> navigate("/login")}>Faça seu login</p>}
          
        </div>
        {(token)?
          <div onClick={handleLogOut}>
            <AiOutlineExport/>
            <p>Sair</p>
          </div>:
        ""}
      </Window>
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
    </IconContext.Provider>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;

  filter: blur(10px);

  background-color:#D2CAC0;
  opacity: 0.7;

  position: absolute;
  top: 0px;
  left: 0;
  z-index:2;
`;
const Window = styled.div`
  width: 250px;
  height: 150px;
  position: absolute;
  top:0;
  left:0;
  z-index: 3;

  background-color: #252525;

  div:nth-child(1){
    width:100%;
    height: 70px;
    color: #252525;
    background-color: #F8F7F3;

    padding: 10px;

    font-size: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }
  div:nth-child(2){
    width:100%;
    height: 70px;
    color: #F8F7F3;

    padding: 10px;

    font-size: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

`;