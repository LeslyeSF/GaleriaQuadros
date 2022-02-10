import { useState } from "react";
import {SearchContainer, InputConatiner} from "./style";
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons/lib";

export default function Navbar({setShowWindow}){
  const [search, setSearch] = useState("");
  function handleSearch(){
    alert(search);
  }
  return(
    <IconContext.Provider value={{className: "react-icons"}}>
      <SearchContainer>
        <AiOutlineMenu onClick={()=> setShowWindow(true)}/>
        <InputConatiner>
          <input 
          placeholder={"Pesquisar"}
          value={search}
          onChange={e=> setSearch(e.target.value)}/>
          <div onClick={handleSearch}><FiSearch/></div>
        </InputConatiner>
        <FaShoppingCart/>
      </SearchContainer>
    </IconContext.Provider>
  );
}