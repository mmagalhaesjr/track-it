import Topo from "../../components/topo/Topo"
import Menu from "../../components/menu/Menu"
import HabitoHoje from "../../components/habito-hoje/HabitoHoje"
import { StyledTelaHoje } from "./styled"
import UserContext from "../../contexts/UserContext"
import { useContext, useEffect, useState } from "react"
import dayjs from 'dayjs'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ProgressContext from "../../contexts/ProgressContext"
require("dayjs/locale/pt-br")

export default function TelaHoje() {
    const dataHoje = dayjs().locale('pt-br').format(`dddd, DD/MM`)
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { porcentagemConcluidos, setPorcentagemConcluidos } = useContext(ProgressContext)
    const [habitosHoje, setHabitosHoje] = useState([])
    const [habitosConcluidos, setHabitosConcluidos] = useState([])
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    // eslint-disable-next-line 
    useEffect(() => listarHabitosHoje(), []);

    function listarHabitosHoje() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const promise = axios.get(url, config)
        promise.then((res) => {
            setHabitosHoje(res.data);
            setHabitosConcluidos(res.data.filter((h) => h.done === true));
            res.data.length !== 0 && setPorcentagemConcluidos(((res.data.filter((h) => h.done === true)).length) / (res.data.length) * 100)
        });
        promise.catch(err => { console.log(err.response.data.message); err.response.data.message === "Token inválido!" && navigate("/") })
    }

    function alterarStatusHabito(h) {

        if (h.done === false) {
            const body = {}
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`
            const promise = axios.post(url, body, config)
            promise.then(() => listarHabitosHoje())
            promise.catch(err => { console.log(err.response.data.message); err.response.data.message === "Token inválido!" && navigate("/") })

        } else {
            const body = {}
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`
            const promise = axios.post(url, body, config)
            promise.then(() => listarHabitosHoje())
            // eslint-disable-next-line no-sequences
            promise.catch(err => (console.log(err.response.data.message), err.response.data.message === "Token inválido!" && navigate("/")))
        }
    }

    return (
        <>
            <Topo />
            <StyledTelaHoje numeroConcluidos={habitosConcluidos.length}>
                <h1 data-test="today"> {dataHoje}</h1>
                <h2 data-test="today-counter">{habitosConcluidos.length === 0 ? "Você ainda não tem habitos concluidos" : `${porcentagemConcluidos.toFixed(0)}% dos hábitos concluídos`}</h2>
                {habitosHoje.map(h => (

                    <HabitoHoje key={h.id} h={h} alterarStatusHabito={alterarStatusHabito}> </HabitoHoje>

                ))}
            </StyledTelaHoje>
            <Menu porcentagemConcluidos={porcentagemConcluidos} setPorcentagemConcluidos={setPorcentagemConcluidos} />
        </>
    )
}