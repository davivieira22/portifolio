import Logo from "../../assets/logo.png";
import { Header } from "../../Components/header";
import { Projetos } from "../../Components/projetos";
import { Contact } from "../../Components/Contato";
import { SobreMim } from "../../Components/sobre";
import { Experiencia } from "../../Components/experiencia";
import {
  Container,
  ContainerEsquerdo,
  ContainerDireito,
  Containeralfa,
} from "./styles";

export const Home = ({ ...props }) => {
  console.log(props);

  return (
    <Container>
      <Header />
      <Containeralfa>
        <ContainerEsquerdo>
          <h1>Programador full-Stack</h1>
          <p>
            Ola,meu nome e David Sou Programador atualente trabalho como
            freelancer esse e meu Portifolio confira Aqui um pouco do meu
            trabalho espero que goste volte sempre
          </p>
        </ContainerEsquerdo>

        <ContainerDireito>
          <img src={Logo} alt="minha foto " />
        </ContainerDireito>
      </Containeralfa>
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <br />
      <Projetos />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SobreMim />
      <br />
      <br />
      <br /> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Experiencia />
      <Contact />
    </Container>
  );
};
