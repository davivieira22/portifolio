import styled from "styled-components";

export const Conteiner =styled.div`
display:flex;
justify-content:center;
height:30px;
background-color:#ffff;
align-items:center;
position: fixed;
width:50%;
height:40px;
margin-left:20%;
border-radius:40px;
`

export const HeaderOn = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:60px;
width:100%;
height:50%;

button{
    border:none;
    font-size:130%;
    font-weight: 300;
    line-height:15px;
 color:blue;
 background-color:#ffff;
   
    cursor:pointer;
    &:hover{
        opacity:0.5;
        font-size:140%;
    }
    &:active{
        opacity:0.5;
        font-size:145%;

    }

}

`
