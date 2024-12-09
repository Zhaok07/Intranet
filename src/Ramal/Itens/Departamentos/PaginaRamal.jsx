import './PaginaRamal.css'

import Barra from "../Componentes/Barra"
import Dropdown from "../Componentes/Dropdown"
import LogoFubog from "../Componentes/LogoFubog"
import AberturaProcesso from "./Itens/Departamentos/AberturaProcesso"
import Post_it_branco from "./Itens/Post_it_branco"
import Post_it_Amarelo from "./Itens/Post_it_Amarelo"
import Post_it_Azul from "./Itens/Post_it_Azul"
import AdministracaoAssistente from "./Itens/Departamentos/AdministracaoAssistente"
import AdministracaoGerencia from './Itens/Departamentos/AdministracaoGerencia'
import AtendimentoCoordenacao from './Itens/Departamentos/AtendimentoCoordenacao'
import AssistenteOperacional from './Itens/Departamentos/AssistenteOperacional'
import AtendimenoSupervisao from './Itens/Departamentos/AtendimentoSupervisao'
import AtendimenoExterno from './Itens/Departamentos/AtendimentoExterno'
import AtendimenoExtCoordenacao from './Itens/Departamentos/AtendimentoExtCoordenacao'
import BalcaoInformacao from './Itens/Departamentos/BalcaoInformacao'
import BancoOlhos from './Itens/Departamentos/BancoOlhos'
import CallCenter from './Itens/Departamentos/CallCenter'
import CentroCirurgico from './Itens/Departamentos/CentroCirurgico'
import Contabilidade from './Itens/Departamentos/Contabilidade'
import DepartamentoPessoal from './Itens/Departamentos/DepartamentoPessoal'
import DiagnosticoCoordenacao from './Itens/Departamentos/DiagnosticoCoordenacao'
import EnfermagemCoordenacao from './Itens/Departamentos/EnfermagemCoordenacao'
import FarmaciaCoordernacao from './Itens/Departamentos/FarmaciaCoordenacao'
import FarmaciaCentroCirurgico from './Itens/Departamentos/FarmaciaCentroCirurgico'
import FarmaciaCentral from './Itens/Departamentos/FarmaciaCentral'
import Faturamento from './Itens/Departamentos/Faturamento'
import Ti from './Itens/Departamentos/Ti'
import TiCoordenacao from './Itens/Departamentos/TiCoodernacao'
import Teleagendamento from './Itens/Departamentos/Teleagendamento'
import Suprimentos from './Itens/Departamentos/Suprimentos'
import SuprimentoCoordenacao from './Itens/Departamentos/SuprimentoCoordenacao'
import Sesmt from './Itens/Departamentos/Sesmt'
import ServioSocial from './Itens/Departamentos/ServicoSocial'
import SecretariaExecutiva from './Itens/Departamentos/SecretariaExecutiva'
import Same from './Itens/Departamentos/Same'
import RH from './Itens/Departamentos/RH'
import FaturamentoCoordenacao from './Itens/Departamentos/FaturamentoCoordenacao'
import Financeiro from './Itens/Departamentos/Financeiro'

function PaginaRamal(){
    return (
        <div>
            <LogoFubog/>
            <Barra/>
            <Dropdown/>


                <div className='dp-container'>
                    <AberturaProcesso/>
                    <AdministracaoAssistente/>
                    <AdministracaoGerencia/>
                    <AtendimentoCoordenacao/>
                    <AssistenteOperacional/>
                    <AtendimenoSupervisao/>
                    <AtendimenoExterno/>
                    <AtendimenoExtCoordenacao/>
                    <BalcaoInformacao/>
                    <BancoOlhos/>
                    <CallCenter/>
                    <CentroCirurgico/>
                    <Contabilidade/>
                    <DepartamentoPessoal/>
                    <DiagnosticoCoordenacao/>
                    <EnfermagemCoordenacao/>
                    <FarmaciaCoordernacao/>
                    <FarmaciaCentroCirurgico/>
                    <FarmaciaCentral/>
                    <Faturamento/>
                    <FaturamentoCoordenacao/>
                    <Financeiro/>
                    <RH/>
                    <Same/>
                    <Sesmt/>
                    <ServioSocial/>
                    <SuprimentoCoordenacao/>
                    <Suprimentos/>
                    <SecretariaExecutiva/>
                    <Teleagendamento/>
                    <Ti/>
                    <TiCoordenacao/>
                    
                </div>
        </div>
    )
}

export default PaginaRamal