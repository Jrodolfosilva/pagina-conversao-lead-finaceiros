import React, { useState } from "react";
import {ContainerHeader,ContainerMobile} from "../styled/Styled";
import Logo from "../assets/logo.png";
import Open from "../assets/open.png";
import Close from "../assets/close.png";

const Header = ()=>{
    const [onMobile,setOnMobile] = useState(false)
    return(
        <ContainerHeader props={onMobile}>
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
            <ContainerMobile>
                <div
                onClick={()=>{
                    setOnMobile(!onMobile)
                }}
                >
                    <img width="30px" src={onMobile?Close:Open} alt="" />

                </div>
            </ContainerMobile>
        </ContainerHeader>
    )
}

export default Header