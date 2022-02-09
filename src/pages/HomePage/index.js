import styled from "styled-components";
import Header from "../../components/Header";

export default function HomePage(){
  const imageslst = [
    "https://ceugaleria.com.br/galeria/wp-content/uploads/2019/11/Conheca-5-belas-artes-famosas-na-histo%CC%81ria-da-arte-noite-estrelada-ceu-galeria.jpg",
    "https://static-cdn.myedools.com/org-113225%2Fschool-114343%2Fcca0552364eb2def67046b68ae9d9165%2F379capa.jpg",
    "https://s2.glbimg.com/45fUyk5Br1BGv-P90NCms4ZRvr0=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/07/24/edvard_munch_-_the_scream_-_google_art_project.jpg"
  ];
  return(
    <HomeScreen>
      <Header></Header>
      <Carrosel/>
      <OptionContainer>
        <Option>
          <Title>Blablabla</Title>
          <img src={"https://s2.glbimg.com/45fUyk5Br1BGv-P90NCms4ZRvr0=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/07/24/edvard_munch_-_the_scream_-_google_art_project.jpg"}/>
          <p><span>Autor:</span>blssksk</p>
          <p><span>Preco:</span>blssksk</p>
        </Option>
        <Option>
          <Title>Blablabla</Title>
          <img src={"https://s2.glbimg.com/45fUyk5Br1BGv-P90NCms4ZRvr0=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/07/24/edvard_munch_-_the_scream_-_google_art_project.jpg"}/>
          <p><span>Autor:</span>blssksk</p>
          <p><span>Preco:</span>blssksk</p>
        </Option>
        <Option>
          <Title>Blablabla</Title>
          <img src={"https://s2.glbimg.com/45fUyk5Br1BGv-P90NCms4ZRvr0=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/07/24/edvard_munch_-_the_scream_-_google_art_project.jpg"}/>
          <p><span>Autor:</span>blssksk</p>
          <p><span>Preco:</span>blssksk</p>
        </Option>
        <Option>
          <Title>Blablabla</Title>
          <img src={"https://s2.glbimg.com/45fUyk5Br1BGv-P90NCms4ZRvr0=/512x320/smart/e.glbimg.com/og/ed/f/original/2019/07/24/edvard_munch_-_the_scream_-_google_art_project.jpg"}/>
          <p><span>Autor:</span>blssksk</p>
          <p><span>Preco:</span>blssksk</p>
        </Option>
      </OptionContainer>
    </HomeScreen>
  );
}

const HomeScreen = styled.div`
  width: 375px;
  min-height: 100vh;

  background-color: #F8F7F3;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Carrosel = styled.div`
  width: 355px;
  height: 300px;

  background-color: #D2CAC0;
`;
const OptionContainer = styled.div`
  width: 355px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;
const Option = styled.div`
  width: 170px;

  color: #252525;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 100px;
  }
  &:hover{
    cursor:pointer;
    border: 1px solid #252525;
  }
  p{
    font-size: 15px;
  }
  span{
    font-weight: 700;
  }
`;
const Title = styled.div`
  color: #252525;
  font-size: 20px;
`;