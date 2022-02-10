import axios from "axios";
import { useEffect, useState } from "react";
import {HomeScreen, Carrosel, OptionContainer, Option, Title} from "./style";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router";


export default function HomePage(){
  const [frames, setFrames] = useState("");
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
            <p><span>Preco: </span>{data.value}</p>
        </Option>
        );
      });
      setFrames(listFrames);
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
      <Navbar/>
      <Carrosel/>
      <OptionContainer>       
       {frames}
      </OptionContainer>
    </HomeScreen>
  );
}
