import  './LogoFubog.css'
import Logo2 from '../imagens/LogoBranca.png';

function LogoFubog({style}){
    return(
        <div className='logo-container'>
            <img src={Logo2} id='Imagem'  alt="Imagem" style={style} />
        </div>
    )
}

export default LogoFubog