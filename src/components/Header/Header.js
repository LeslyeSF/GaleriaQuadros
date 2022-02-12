import { ActionButtons, Logo, LogoImage, NavBar } from "../../styles/HeaderStyle";
import { IoMenu, IoCartSharp } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import logo from '../../styles/logo-removebg-preview.png'

export function Header({ setShowWindow }) {
    const navigate = useNavigate();
    return (
        <NavBar>
            <Logo onClick={() => navigate('/')}>
                <LogoImage src={ logo } />
            </Logo>

            <ActionButtons>
                <IoMenu onClick={()=> setShowWindow(true)} />
                <IoCartSharp onClick={() => navigate('/shopcart')} />
            </ActionButtons>
        </NavBar>
    );
}
