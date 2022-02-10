import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, BDiv } from "./Style";
import { CgMenu, CgShoppingCart } from "react-icons/cg";

import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
  }

  const BASE_URL = "http://localhost:5000";

  function signUp(formData) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
    return promise;
  }

  async function handleSignUp(e) {
    e.preventDefault();
    if (confirmPassword !== formData.password) {
      alert("As senhas não conferem");
      return;
    }
    setLoading(true);
    const promise = signUp(formData);
    promise.then(() => {
      setLoading(false);
      navigate("/");
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
      <form on onSubmit={handleSignUp}>
        <input
          disabled={loading}
          onChange={handleInputChange}
          value={formData.name}
          type="Text"
          placeholder="Nome"
          name="name"
        />
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
        <input
          disabled={loading}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Confirme a senha"
          name="confirm-password"
        />
        <BDiv>
          <Button disabled={loading}>Cadsolafghpçijdfshgljhdsaflghdlaçsfhldfgjastrar</Button>
        </BDiv>
      </form>
      <Link to="/login">Já tem uma conta? Clique aqui para logar</Link>
    </Container>
  );
}
