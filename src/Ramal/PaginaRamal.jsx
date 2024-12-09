import './PaginaRamal.css'

import Barra from "../Componentes/Barra"
import Dropdown from "../Componentes/Dropdown"
import LogoFubog from "../Componentes/LogoFubog"
import AberturaProcesso from "./Itens/Departamentos/AberturaProcesso"
import AdministracaoAssistente from "./Itens/Departamentos/AdministracaoAssistente"
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
import GerenciaFinanceiro from './Itens/Departamentos/GerenciaFinanceiro'
import GerenciaOperacional from './Itens/Departamentos/GerenciaOperacional'
import Internacao from './Itens/Departamentos/Internacao'
import Juridico from './Itens/Departamentos/Juridico'
import LenteContato from './Itens/Departamentos/LenteContato'
import ManutencaoCoordenacao from './Itens/Departamentos/ManutencaoCoordenacao'
import ManutencaoHigienizacao from './Itens/Departamentos/ManutencaoHigienizacao'
import Orçamento from './Itens/Departamentos/Orçamento'
import Ouvidoria from './Itens/Departamentos/Ouvidoria'
import Planejamento from './Itens/Departamentos/Planejamento'
import PostoEnfermagem from './Itens/Departamentos/PostoEnfermagem'
import ProntoSocorro from './Itens/Departamentos/ProntoSocorro'
import RecepcaoDiagnosticoUm from './Itens/Departamentos/RecepcaoDiagnosticoUM'
import RecepcaoDiagnosticoDois from './Itens/Departamentos/RecepcaoDiagnosticoDois'
import RecepcaoParticular from './Itens/Departamentos/RecepcaoParticular'
import RecepcaoSus from './Itens/Departamentos/RecepcaoSus'
import RelacoesInstitucionais from './Itens/Departamentos/RelacoesInstitucionais'
import Revisor from './Itens/Departamentos/Revisor'
import GerenciaAdministrativa from './Itens/Departamentos/GerenciaAdministrativa'


function PaginaRamal(){
    return (
        <div>
            <LogoFubog/>
            <Barra/>
            <Dropdown/>

            <div className='titulo'>
                <h1>RAMAIS</h1>
                <p id='paragrafo'>Use Ctrl + F para buscar rapidamente.</p>
            </div>


                <div className='dp-container'>
                    <AberturaProcesso/>
                    <AdministracaoAssistente/>
                    <AssistenteOperacional/>
                    <AtendimentoCoordenacao/>
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
                    <GerenciaAdministrativa/>
                    <GerenciaFinanceiro/>
                    <GerenciaOperacional/>
                    <Internacao/>
                    <Juridico/>
                    <LenteContato/>
                    <ManutencaoCoordenacao/>
                    <ManutencaoHigienizacao/>
                    <Orçamento/>
                    <Ouvidoria/>
                    <Planejamento/>
                    <PostoEnfermagem/>
                    <ProntoSocorro/>
                    <RecepcaoDiagnosticoUm/>
                    <RecepcaoDiagnosticoDois/>
                    <RecepcaoParticular/> 
                    <RecepcaoSus/>
                    <RelacoesInstitucionais/>
                    <Revisor/>
                    <RH/>
                    <Same/>
                    <SecretariaExecutiva/>
                    <ServioSocial/>
                    <Sesmt/>
                    <Suprimentos/>
                    <SuprimentoCoordenacao/>
                    <Teleagendamento/>
                    <Ti/>
                    <TiCoordenacao/>
                    
                </div>
        </div>
    )
}

export default PaginaRamal