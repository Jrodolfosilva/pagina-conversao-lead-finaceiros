import styled from "styled-components";

/*
Estilização do Cabeçalho
*/
export const ContainerHeader=styled.header`
    /* background-color: #111111; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;

    position: fixed;
    top:5%;
    width: 100vw;
    z-index: 99;

        figure img{
            width: 38px;
        }
        nav ul{
            display: flex;
            font-weight: 700;
            color:#e5e5e7;
            gap:32px;

                li{ 
                    display: block;
                    padding: 4px 4px;
                    cursor: pointer;
                    
                        &:hover{
                            color: #daa520;
                        }
                }
        }

`

/*
Estilização do Cabeçalho
*/


/*
Estilização do Banner
*/

export const ContainerBanner = styled.div`
background-color: #111111;
height: 100vh;
display: flex;
justify-content: center;

        img{
            width:100%;
            height: 100vh;
            opacity: 0.3;
        }
        div{
            color:#e5e5e7;
            text-align: center;
            position: absolute;
            top:40%;

                h2{
                    font-size: 48px;
                    letter-spacing: 1px;
                }
                p{
                    margin: 8px;
                }
                button{
                    margin-top: 30px;
                    height: 44px;
                    width: 250px;
                    border:none;
                    border-radius: 8px;
                    font-size: 16px;
                    color:#e5e5e7;
                    font-weight: 800;
                    background-color:#18d26e;
                    cursor: pointer;
                    transition: 0.4s;

                        &:hover{
                            background-color: #e5e5e7;
                            color:#18d26e;
                            scale: 1.05;
                        }
                }
        }
`
/*
Estilização do Banner
*/


/*
Estilização do Attractive
*/
export const ContainerAttractive = styled.div`
display:  flex;
justify-content: space-between;
align-items: center;
padding: 40px 120px;
background-color: #111111;
color:#e5e5e7;
height: 60vh;


div{
    width: 25%;
    text-align: justify;
    img{
        display: block;
        margin: 0 auto;
        width: 80px;
    }
}










`
/*
Estilização do Attractive
*/


export const ContainerAbout = styled.section`
padding: 40px 120px;
height: 100vh;
p{
    text-align: center;
}
 h2{
     font-size: 48px;
     letter-spacing: 1px;
     text-align: center;
     padding: 60px 0 ;
  }
  div{
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#111111;
    gap:40px;
    margin-top: 20px;

    div{
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #daa520;
        color: #e5e5e7;
        color: #111111;
        padding: 2%;
        border-radius: 2px;
        
        h2{
            font-size: 20px;
            padding: 0px 0px;
        }
        p{
            text-align: justify;
        }
       
    }
}

`

export const ContainerServices = styled.section`
background-color: #18d26e;
min-height: 100vh;
padding: 50px 150px;


h2{
     font-size: 48px;
     letter-spacing: 1px;
     text-align: center;
     padding: 60px 0 ;
  }

  section{
    color:#111111;
    display: flex;
    justify-content: space-between;
    gap:5vw;
    div:first-child img{
        width: 30px;
    }

    div:last-child img{
        width: 400px;
    }
  }




`