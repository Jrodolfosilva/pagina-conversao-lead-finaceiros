import styled from "styled-components";


export const ContainerHeader=styled.header`
   background-color: #111111; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;

    position: fixed;
    top:0%;
    min-height: 10vh;
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

        @media (max-width:425px) {
            padding: 5px;

            nav{
                display: none;
                ${({props})=>props.onMobile &&`
                
                
                `}
            }
        }

`
export const ContainerMobile = styled.div`
display: none;

@media (max-width:450px) {
    display: block;
}

`

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

export const ContainerAttractive = styled.div`
display:  flex;
justify-content: space-between;
align-items: center;
padding: 40px 110px;
background-color: #111111;
color:#e5e5e7;
min-height: 60vh;
flex-wrap: wrap;



div{
    width: 250px;
    text-align: justify;
    img{
        display: block;
        margin: 0 auto;
        width: 80px;
    }
}


@media (max-width:768px) {
    padding: 40px 60px;
    gap:30px;

    div{
        width: 170px;
    }
    

}
@media (max-width:425px) {
    flex-direction:column;
    padding: 40px 20px;

    div{
        width: 250px;
    }
}

`

export const ContainerAbout = styled.section`
padding: 100px 120px;

p{
    text-align: center;
}
 h2{
     font-size: 48px;
     letter-spacing: 1px;
     text-align: center;
     margin-bottom: 30px;
     
  }
  div{
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#111111;
    gap:40px;
    margin-top: 20px;

    div{
        display: flex;
        flex-direction: column;
        text-align: justify;
        padding:2%;     
        
        img{
            width: 80px;
            margin-bottom: -20px;
        }
        h2{
            font-size: 20px;
            margin-bottom: -20px;
        }
        p{
            text-align: justify;
        }
       
    }
}

@media (max-width:768px) {
    
    padding: 40px 60px;
    
    p{
        text-align: justify;
    }
      div{
        flex-direction: column;  
      
    }
    
    }


@media (max-width:425px) {
    
padding: 40px 20px;

p{
    text-align: justify;
}
 h2{
     font-size: 30px;
  }
  div{
    flex-direction: column;  
  
}

}

`

export const ContainerServices = styled.section`
background-color: #18d26e;
min-height: 100vh;
padding: 100px 150px;

h2{
     font-size: 48px;
     letter-spacing: 1px;
     text-align: center;
     margin-bottom: 30px;
  }

  section{
    color:#111111;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:5vw;
   

  }

@media (max-width:768px) {
padding: 50px 60px;

section{   
div:last-child img{ display: none;}
}
}

@media (max-width:425px) {
padding: 50px 20px;

h2{font-size: 30px;}

section{
    
div:last-child img{ display: none;}
  }
}



`

export const ContainerContact = styled.section`


`

export const ContainerFooter = styled.footer`
padding: 10vh;
background-color: #111111;
text-align: center;
    

`