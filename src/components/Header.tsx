import React, { useState } from "react";
import {Link} from "react-router-dom"
import {ContainerHeader,ContainerMobile} from "../styled/Styled";
// @ts-expect-error
import Logo from "../assets/logo.png";
// @ts-expect-error
import Open from "../assets/open.png";
// @ts-expect-error
import Close from "../assets/close.png";

const Header = ()=>{
    const [onMobile,setOnMobile] = useState(false)
    return(
        // @ts-expect-error
        <ContainerHeader Mobile={onMobile}>
            <figure>
                <img src={Logo} alt="Logomarca" />
            </figure>
            <nav>
                <ul>
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