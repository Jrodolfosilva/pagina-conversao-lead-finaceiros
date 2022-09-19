import React from "react"
import {ContainerAbout} from "../styled/Styled"
// @ts-expect-error
import imgVisao from "../assets/visao.png"
// @ts-expect-error
import imgIntercambio from "../assets/intercambio.png"
// @ts-expect-error
import imgmeta from "../assets/meta (1).png"

const About = ()=>{
    return(
        <ContainerAbout>
            <h2 id="empresa">SOBRE NÓS</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? Sed ut voluptatem sit, magni id non oditLorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? Sed ut voluptatem sit, magni id non odiLorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero consectetur quo commodi nisi perferendis distinctio eligendi tempore eius, corrupti ducimus pariatur? </p>
            <div>

            <div>
               <img src={imgmeta} alt="" />
               <h2>Missão</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
            <img src={imgIntercambio} alt="" />
            <h2>Valores</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>
            <div>
            <img src={imgVisao} alt="" />
            <h2>Visão</h2>
                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor </p>
            </div>

            </div>
        </ContainerAbout>
    )
}

export default About