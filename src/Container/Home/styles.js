import styled from "styled-components";
export const Containeralfa = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;

`;

export const ContainerEsquerdo = styled.div`
  width: 50%;
  height: 20%;
  margin-top: 10%;
  margin-left: 10%;
  h1 {
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    text-overflow: unset;
    color:#f23;
  }
  P {
    color: aliceblue;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
  }
`;
export const ContainerDireito = styled.div`
  width: 50%;
  img {
    width: 100%;
    border-radius: 90px;
  }
`;
