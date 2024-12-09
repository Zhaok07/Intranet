import  './LogoFubog.css'
import Logo2 from '../imagens/LogoBranca.png';
import Grade from '../imagens/grade.png'
import LogoLions from '../imagens/LogoLions.png'

function LogoFubog({style}){
    return(
        <div className='logo-container'>
            <img src={Logo2} id='Imagem'  alt="Imagem" style={style} />
            {/*<img src={LogoPreta} id='LogoPreta' alt="imagem" />*/}
            <img src={LogoLions} id='Lions' alt="Imagem"style={style} />
        </div>
    )
}

export default LogoFubog