import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Index.js";
import SignUp from "./pages/SignUp/Index.js";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import { ProductPage } from "./pages/ProductPage";

export default function App(){
  const [user, setUser] = useState(null);
  const [ token, setToken ] = useState(null);

  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser, token, setToken}} >
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/product/:idProduct" element={<ProductPage/>}/>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>      
    </>
  );
}