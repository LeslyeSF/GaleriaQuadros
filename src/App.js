import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<HomePage/>}/>
        <Route path="/signup" element={<HomePage/>}/>
        <Route path="/product/:idProduct" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>      
    </>
  );
}