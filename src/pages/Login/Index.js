import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, BDiv } from "./Style";
import { CgMenu, CgShoppingCart } from "react-icons/cg";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { tokenVerifyLocalStorage } from "../../services/tokenService";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  useEffect(() => tokenVerifyLocalStorage(navigate, setToken, setUser) ,[]);

  const BASE_URL = "http://localhost:5000";
  function logIn(formData) {
    const promise = axios.post(`${BASE_URL}/login`, formData);
    return promise;
  }

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const promise = logIn(formData);
    promise.then((response) => {
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("last-user", JSON.stringify(response.data));
      setLoading(false);
      navigate("/");
      localStorage.setItem("tokenGQ", response.data.token);
      localStorage.setItem("nameGQ", response.data.user.name);
      localStorage.setItem("emailGQ", response.data.user.email);
    });
    promise.catch((error) => {
      alert(error);
      setLoading(false);
    });
  }

  return (
    <Container>
      <nav>
        <CgMenu />
        <CgShoppingCart />
      </nav>
      <form on onSubmit={handleLogin}>
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          placeholder="Senha"
          name="password"
        />
        <BDiv>
          <Button disabled={loading}>Entrar</Button>
        </BDiv>
      </form>
      <Link to="/signup">
        Ainda não tem uma conta? Clique aqui para se cadastrar
      </Link>
    </Container>
  );
}
