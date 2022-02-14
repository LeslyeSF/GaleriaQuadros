import { ActionButtons, Logo, LogoImage, NavBar } from "../../styles/HeaderStyle";
import { IoMenu, IoCartSharp } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
import logo from '../../styles/logo-removebg-preview.png'
import NavbarOptions from "../NavbarOptions";

export function Header() {
    const navigate = useNavigate();
    return (
        <NavBar>
            <Logo onClick={() => navigate('/')}>
                <LogoImage src={ logo } />
            </Logo>
            <NavbarOptions/>
        </NavBar>
    );
}
