import Topo from "../../components/topo/Topo"
import Menu from "../../components/menu/Menu"
import { StyledTelaHistorico } from "./styled"

export default function TelaHistorico(){

    return (
        <>
            <Topo />
            <StyledTelaHistorico>
                <div className="titulo">
                    <h1>Histórico</h1>
                </div>
                <div >
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </div>
            </StyledTelaHistorico>
            <Menu />
        </>
    )
}

