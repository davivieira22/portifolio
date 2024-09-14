import {Container,H1} from './styles'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Açai from '../../assets/açai da larih.png'
import Sorteador from '../../assets/sorteador.png'
import Barger from '../../assets/hanburgueria.png'
import Jogo from '../../assets/jokenpo.png'
import SuperMario from '../../assets/super mario.png'
import Cronometro from '../../assets/cronometro.png'


export const Projetos = ()=>{

    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
<Container>
<H1>Meus Projetos</H1>
<Carousel
className='carrosel-de-projetos' 
infinite={true} autoPlaySpeed={1000}  

  responsive={responsive}>
  <div><img src={Açai} alt='foto do projeto'/>
  <a>click aqui</a></div>
  <div><img src={Sorteador} alt='foto do projeto'/>
  <a>click aqui </a></div>
  <div><img src={Barger} alt='foto do projeto'/>
  <a>click aqui </a></div>
  <div><img src={SuperMario} alt='foto do projeto'/>
  <a>click aqui </a></div>
  <div><img src={Cronometro} alt='foto do projeto'/>
  <a>click aqui </a></div>
  <div><img src={Jogo} alt='foto do projeto'/>
  <a>click aqui </a></div>
  
</Carousel>;

</Container>
    )
}