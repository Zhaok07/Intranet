
import Barra from "../Componentes/Barra"
import Dropdown from "../Componentes/Dropdown"
import LogoFubog from "../Componentes/LogoFubog"
import SwiperUm from "./Swiper/SwiperUm"
import SwiperDois  from "./Swiper/SwiperDois"
import SwiperTres from "./Swiper/SwiperTres"
import BarraLeft from "../Componentes/BarraLeft"
import SubBarra from "../Componentes/SubBarra"
import TopicosHome from "../Componentes/TopicosHome"
import LinkMV from "../Componentes/Links/LinkMV"
import Rvideo from "../POP/Rvideo"
import LinkPEP from "../Componentes/Links/LinkPEP"

import './PaginaHome.css'
import HomeICone from "../Home/Itens/HomeICone"
import SwiperQuatro from "./Swiper/SwiperQuatro"

function PaginaHome(){

    return(
        <div>
            <LogoFubog/>
            <Barra/>
            <Dropdown/>

                <div className="container-intranet">
                    <p id="nome-home">INTRANET</p>
                       </div>
            <div className="container-links">
            <LinkMV/>
            <LinkPEP/>
            </div>
            
            <SwiperUm/>
            <SwiperDois/>
            <SwiperTres/>
            <SwiperQuatro/>
            <BarraLeft/>
            <SubBarra/>
            <TopicosHome/>


            

        </div>
    )

}

export default PaginaHome