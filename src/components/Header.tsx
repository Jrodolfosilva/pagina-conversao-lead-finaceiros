import React from "react";
import {ContainerHeader} from "../styled/Styled";
import Logo from "../assets/logo.png";


const Header = ()=>{
    return(
        <ContainerHeader>
            <figure>
                <img src={Logo} alt="Logomarca" />
            </figure>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>EMPRESA</li>
                    <li>SERVIÇOS</li>
                    <li>CONTATO</li>
                </ul>
            </nav>
        </ContainerHeader>
    )
}

export default Header