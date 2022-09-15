import React from "react"
import {ContainerAbout} from "../styled/Styled"
import imgDadosPessoais from "../assets/dados-pessoais.png"
import imgVisao from "../assets/visao.png"
import imgIntercambio from "../assets/intercambio.png"
import imgmeta from "../assets/meta (1).png"

const About = ()=>{
    return(
        <ContainerAbout>
            <h2>SOBRE NÓS</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? Sed ut voluptatem sit, magni id non oditLorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? Sed ut voluptatem sit, magni id non odiLorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? Sed ut voluptatem sit, magni id non odi.</p>
            <div>
            <div>
               <h2>Missão</h2>
               <img src={imgmeta} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
            <h2>Valores</h2>
            <img src={imgIntercambio} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
            <h2>Visão</h2>
            <img src={imgVisao} alt="" />
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            </div>
        </ContainerAbout>
    )
}

export default About