import { useContext, useState } from "react";
import {SearchContainer, InputConatiner} from "./style";
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons/lib";
import OptionsWindow from "../OptionsWindow";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function NavbarOptions(){
  const [search, setSearch] = useState("");
  const [showWindow, setShowWindow] = useState(false);
  const {token} = useContext(UserContext);
  const navigate = useNavigate();
  function handleSearch(){
    alert(search);
  }
  
  return(
    <IconContext.Provider value={{className: "react-icons"}}>
      <SearchContainer>
        <AiOutlineMenu onClick={()=> setShowWindow(true)}/>
  
        <FaShoppingCart onClick={()=> (token)? navigate("/shopcart") : navigate("/login") }/>
      </SearchContainer>
      {(showWindow)? <OptionsWindow setShowWindow={setShowWindow}/> : ""}
    </IconContext.Provider>
  );
}