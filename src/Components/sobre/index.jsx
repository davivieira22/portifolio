import {Container,H1,Foto,Sobre} from './styles';

import Logo from "../../assets/foto.jpg";


export const SobreMim = ()=>{
    return(
        <Container>
            <Sobre>
            <H1> Sobre Mim </H1>
            <p><br/>Meu nome e david trabalho atualmente na area de 
                como programador full-stack,atuamente tabalho como freelancer 
                criando site web e dando manutençao em sites de acordo com a nessescidade
                estou estudando para aprimotar mais as minhas abilidades nesse mercado atualmente
                 estou estundando IA e com isso atualizar mais meu portifolio . e esse sou eu 
                 caso se enterece e so entrar em contato clicando nesse botao abaixo  
                 <br/><button>contato</button> 
                 muito obrigado e fiquem com deus 
            </p>
            </Sobre>
            <Foto> <img src={Logo} /> </Foto>
        </Container>
    )
}