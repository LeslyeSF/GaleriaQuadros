import axios from "axios";
import { useEffect, useState } from "react";
import {HomeScreen, Carousel, OptionContainer, Option, Title} from "./style";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router";
import React from "react";
import SlideShow from "../../components/SlideShow";
import OptionsWindow from "../../components/OptionsWindow";


export default function HomePage(){
  const [frames, setFrames] = useState("");
  const [slide, setSlide] = useState("");
  const [showWindow, setShowWindow] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const promise = axios.get("http://localhost:5000/data");
    promise.then((ans)=>{
      
      let listFrames = ans.data.map((data)=>{
        return(
          <Option onClick={()=>handleSelected(data._id)}>
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
      let listSlides = ans.data.map((data)=>{
        return(
          <div>
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
    navigate("/");
  }
  
  return(
    <HomeScreen>
      <Header>
      </Header>
      <Navbar setShowWindow={setShowWindow}/>
      {(showWindow)? <OptionsWindow setShowWindow={setShowWindow}/> : ""}
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
