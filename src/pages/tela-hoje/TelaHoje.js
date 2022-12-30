import Topo from "../../components/topo/Topo"
import Menu from "../../components/menu/Menu"
import { StyledTelaHoje } from "./styled"
import dayjs from 'dayjs'
import HabitoHoje from "../../components/HabitoHoje"
require("dayjs/locale/pt-br")

export default function TelaHoje(){
    const dataHoje = dayjs().locale('pt-br').format(`dddd, DD/MM`)

    return (
        <>
            <Topo />
            <StyledTelaHoje numeroConcluidos={1}>
                <h1 data-test="today"> {dataHoje}</h1>
                <h2 data-test="today-counter">100% dos hábitos concluídos`</h2>
                <HabitoHoje></HabitoHoje>
                <HabitoHoje></HabitoHoje>
                <HabitoHoje></HabitoHoje>
            </StyledTelaHoje>
            <Menu/>
        </>
    )
}






