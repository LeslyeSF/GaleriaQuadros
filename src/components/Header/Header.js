import { ActionButtons, Logo, NavBar } from "../styles/HeaderStyle";
import { IoMenu, IoCartSharp } from 'react-icons/io5'

export function Header() {
    return (
        <NavBar>
            <Logo>Galeria Quadros</Logo>

            <ActionButtons>
                <IoMenu />
                <IoCartSharp />
            </ActionButtons>
        </NavBar>
    );
}
