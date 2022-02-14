import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, BDiv } from "./Style";
import { CgMenu, CgShoppingCart } from "react-icons/cg";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";
import { tokenVerifyLocalStorage } from "../../services/tokenService";

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { setUser, setToken } = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);

    useEffect(() => tokenVerifyLocalStorage(navigate, setToken, setUser) ,[]);

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData });
    }

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

            localStorage.setItem("tokenGQ", response.data.token);
            localStorage.setItem("nameGQ", response.data.user.name);
            localStorage.setItem("emailGQ", response.data.user.email);

            setLoading(false);
            setModalSuccess(true)
            
            setTimeout(() => {
                navigate("/");
            }, 1000);
        });
        promise.catch((error) => {
            setLoading(false);

            if(error.response.status === 400) {
                setFormData({ email: "", password: "" });
                setMessageError('Dica: A senha deve ter mais que 6 dígitos');
                setModalError(true);
            }

            if(error.response.status === 401) {
                setFormData({ email: "", password: "" });
                setMessageError('Email ou senha inválidos');
                setModalError(true);
            }
    
            if (error.response.status === 500) {
                setFormData({ email: "", password: "" });
                setMessageError("Servidor fora de área, tente novamente mais tarde");
                
                setModalError(true);
                setTimeout(() => {
                    sessionStorage.clear()
                }, 2000)
            }
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

            {
                modalError ?
                    <ModalError message={ messageError } setModal={ setModalError } />
                : ''
            }

            {
                modalSuccess ?
                    <ModalSuccess />
                : ''
            }
        </Container>
    );
}
