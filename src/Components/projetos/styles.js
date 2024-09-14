import styled from "styled-components";

export const Container = styled.div`
  height:100%;
  margin-top:-30px;
 
  
  .carrosel-de-projetos {
    width: 100%;
    margin-top:-150px;
    height: 100vh;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-left:10px;
      img {
        width:70%;
        height: 300px;
      }
      a{
        font-size:30px;
        font-weight:300;
        line-height:8px;
        cursor: pointer;
        color: aliceblue;
        margin-top:18px ;
        &:hover{
            opacity:0.3;
            font-size:35px;

        }
      }
    }
  }
`;

export const H1 =styled.h1`
display: flex;
 font-size:60px;
    font-weight:600;
    line-height:10px;
    justify-content: center;
    color: aliceblue;
`
