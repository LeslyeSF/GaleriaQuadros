import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, BDiv, Input, Title } from "./Style";
import {Header} from "../../components/Header/Header";

import { tokenVerifyLocalStorage } from "../../services/tokenService";
import UserContext from "../../contexts/UserContext";
import { signUp } from "../../services/galeriaQuadros";

import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";

export default function SignUp() {
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [compare, setCompare] = useState(true);
    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        if (formData.password !== confirmPassword) {
            setCompare(false);
        } else {
            setCompare(true);
        }
        tokenVerifyLocalStorage(navigate, setToken)
    } ,[formData, confirmPassword, compare]);

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData });
    }

    function handleInputChange(e) {
        formData[e.target.name] = e.target.value;
        setFormData({ ...formData });
    }

    

    async function handleSignUp(e) {
        e.preventDefault();
        if (confirmPassword !== formData.password) {
            setConfirmPassword('')
            setMessage('As senhas não conferem');
            setModalError(true);
            return
        }
        setLoading(true);
        const promise = signUp(formData);
        promise.then(() => {
            setMessage('Cadastro realizado com sucesso!');
            setModalSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000)
            setLoading(false);
        });
        promise.catch((error) => {
            setConfirmPassword('');

            if(error.response.status === 422) {
                setMessage('Digite dados válidos');
                setModalError(true);
            }

            if(error.response.status === 409) {
                setFormData({ email: "", password: "" });
                setConfirmPassword('')
                setMessage('Email já cadastrado');
                setModalError(true);
            }

            if (error.response.status === 500) {
                setMessage("Servidor fora de área, tente novamente mais tarde");
                setModalError(true);
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
            setLoading(false);  
        });
    }

    return (
        <Container>
            <Header/>
            <Title>Cadastro</Title>
            <form on onSubmit={handleSignUp}>
                <Input
                    disabled={loading}
                    onChange={handleInputChange}
                    value={formData.name}
                    type="Text"
                    placeholder="Nome"
                    name="name"
                />
                <Input
                    disabled={loading}
                    onChange={handleInputChange}
                    value={formData.email}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                />
                <Input
                    compare={compare}
                    disabled={loading}
                    onChange={handleInputChange}
                    value={formData.password}
                    type="password"
                    placeholder="Senha"
                    name="password"
                />
                <Input
                    compare={compare}
                    disabled={loading}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirm-password"
                />
                <BDiv>
                    <Button disabled={loading}>Cadastrar</Button>
                </BDiv>
            </form>
            <Link to="/login">
                <p>Já tem uma conta?<br/>Clique aqui para logar</p>
            </Link>

                {
                    modalError ?
                        <ModalError message={ message } setModal={ setModalError } />
                    : ''
                }

                {
                    modalSuccess ?
                        <ModalSuccess message={message} />
                    : ''
                }
        </Container>
  );
}
