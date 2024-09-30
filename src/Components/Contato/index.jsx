import Whatsapp from '../../assets/whatsapp.png'
import Linkedin from '../../assets/linkedin.png'
import Git from '../../assets/github.png'
import instagran from '../../assets/instagram.png'
import Email from '../../assets/o-email.png'
import {Container} from './styles'

export const Contact = () =>{
    return(
      <Container>
        <a><img src={Whatsapp} alt='foto-do-whatsapp'/></a>
        <a><img src={Linkedin} alt='foto-do-whatsapp'/></a>
        <a><img src={Git} alt='foto-do-whatsapp'/></a>
        <a><img src={instagran} alt='foto-do-whatsapp'/></a>
        <a><img src={Email} alt='foto-do-whatsapp'/></a>
       
      </Container>
    )
}