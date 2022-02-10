import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, BDiv } from "./Style";
import { CgMenu, CgShoppingCart } from "react-icons/cg";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  });

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
      setUser(response.data);
      localStorage.setItem("last-user", JSON.stringify(response.data));
      setLoading(false);
      navigate("/account");
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
