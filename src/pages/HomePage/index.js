import { useContext, useEffect, useState } from "react";
import {HomeScreen, Carousel, OptionContainer, Option, Title} from "./style";
import {Header} from "../../components/Header/Header.js";
import { useNavigate } from "react-router";
import React from "react";
import SlideShow from "../../components/SlideShow";
import { getData } from "../../services/galeriaQuadros";
import UserContext from "../../contexts/UserContext";
import { tokenVerifyLocalStorage } from "../../services/tokenService";


export default function HomePage(){
  const [frames, setFrames] = useState("");
  const [slide, setSlide] = useState("");
  const {user, setToken, setUser} = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  useEffect(()=>{
    tokenVerifyLocalStorage(navigate, setToken, setUser);
    const promise = getData();
    promise.then((ans)=>{
      
      let listFrames = ans.data.map((data, index)=>{
        return(
          <Option key={index} onClick={()=>handleSelected(data._id)}>
            <Title>{data.title}</Title>
            <div>
              <img 
              src={data.linkImg}
              alt={data.title}/>
            </div>
            <p><span>Autor: </span>{data.author}</p>
            <p><span>Preço: </span>{data.value}</p>
        </Option>
        );
      });
      let listSlides = ans.data.map((data, index)=>{
        return(
          <div key={index} onClick={()=>handleSelected(data._id)}>
            <img src={data.linkImg} alt={data.title}/>
          </div>
        );
      });
      setFrames(listFrames);
      setSlide(listSlides);
    });
    promise.catch((err)=>{
      console.log(err);
    });
  }, []);
  
  function handleSelected(id){
    navigate(`/product/${id}`);
  }
  
  return(
    <HomeScreen>
      <Header/>
      <Carousel>
        <div>
          <SlideShow slides={slide}/>
        </div>
      </Carousel>
      <OptionContainer>       
       {frames}
      </OptionContainer>
    </HomeScreen>
  );
}