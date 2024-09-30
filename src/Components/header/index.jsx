import {Conteiner,HeaderOn} from './styles'
import PropTypes from 'prop-types';
import { animateScroll as scroll, } from 'react-scroll';


export const Header = () => {
   const scrollTo = () => {
      scroll.scrollTo(600); 
    };
    const scrollContact = () => {
      scroll.scrollToBottom(); 
    };
      const scrollSobre = () => {
      scroll.scrollTo(1300); 
    };  
    
    const scrollHome = () => {
      scroll.scrollToTop(); 
    };

 return (
<Conteiner>
<HeaderOn>
<button onClick={scrollHome}>home</button>
   <button >experiencia</button>
   <button  onClick={scrollTo}>Projetos</button>
   <button onClick={scrollSobre}>sobre</button>
   <button onClick={ scrollContact}>contato</button>
</HeaderOn> 

</Conteiner>

 )


}

Header.proptypes = {
   children: PropTypes.shape,
 };