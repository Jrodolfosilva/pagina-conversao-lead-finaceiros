import React from "react";
import {ContainerBanner} from "../styled/Styled"
import ImgB from "../assets/banner1.jpg"


const Banner = ()=>{
    return(
        <ContainerBanner>
            <img src={ImgB} alt="" />
            <div>
                <h2>Resolva sua vida financeira</h2>
                <p>Assumimos sua dívida sem burocracia</p>
                <button>Saber mais</button>
            </div>
        </ContainerBanner>
    )
}

export default Banner