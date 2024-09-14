import styled from "styled-components";

export const Conteiner =styled.div`
display:flex;
justify-content:center;
height:30px;


`

export const HeaderOn = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:60px;
margin-top:28px;
button{
    border:none;
    font-size:30px;
    font-weight: 300;
    line-height:10px;
 color:blue;
 background-color: black;
   
    cursor:pointer;
    &:hover{
        opacity:0.3;
        font-size:45px;
    }
    &:active{
        opacity:0.5;
        font-size:45px;

    }

}

`
