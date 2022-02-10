import { useState } from "react";
import {SearchContainer, InputConatiner} from "./style";
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons/lib";

export default function Navbar(){
  const [search, setSearch] = useState("");
  function handleSearch(){

  }
  return(
    <IconContext.Provider value={{className: "react-icons"}}>
      <SearchContainer>
      <AiOutlineMenu onClick={()=> alert("hello")}/>
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