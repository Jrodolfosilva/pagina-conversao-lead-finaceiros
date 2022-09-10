import React from "react";
import {ContainerAttractive} from "../styled/Styled"
import Facil from "../assets/facil.png"
import Agilidade from "../assets/agilidade.png"
import Profissional from "../assets/profissional.png"
const Attractive = ()=>{
    return (
        <ContainerAttractive>
            <div>
                <img src={Facil} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
                <img src={Agilidade} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
                <img src={Profissional} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
           
        </ContainerAttractive>
    )
}

export default Attractive