
import Topo from "../../components/topo/Topo"
import Menu from "../../components/menu/Menu"
import { StyledAdicionarTarefa, StyledTelaHabitos, StyledBotaoForm } from "./styled"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import Habito from "../../components/habito/Habito"
import { ThreeDots } from "react-loader-spinner"

export default function TelaHabitos({ porcentagemConcluidos, setPorcentagemConcluidos }) {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [days, setDays] = useState([])
    const [clicado, setClicado] = useState([])
    const [habitos, setHabitos] = useState([])
    const [formAberto, setFormAberto] = useState(false)
    const [carregando, setCarregando] = useState(false)
    const { user } = useContext(UserContext)
    const dias = [{ name: "D", id: 0 }, { name: "S", id: 1 }, { name: "T", id: 2 }, { name: "Q", id: 3 }, { name: "Q", id: 4 }, { name: "S", id: 5 }, { name: "S", id: 6 }]
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    // eslint-disable-next-line
    useEffect(() => listarHabitos(), [])


    function listarHabitos() {

        const url = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits')
        const promise = axios.get(url, config)
        promise.then(res => setHabitos(res.data))
        promise.catch(() => {navigate("/") })
    }

    function selecionarDia(id) {
        if (days.includes(id)) {
            setDays(days.filter(d => d !== id))
        } else {
            setDays([...days, id])
        }
    }

    function salvarHabito() {
        setCarregando(true)
        const body = {
            name: name,
            days: days
        }
        const url = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits')
        const promise = axios.post(url, body, config)
        promise.then(() => {setCarregando(false); setName(''); setDays([]); setClicado([]); alert('H??bito adicionado'); listarHabitos()})
        promise.catch(err => { setCarregando(false); console.log(err.response.data.message); err.response.data.message === `Campo "body" inv??lido!` && alert("Preencha os dados corretamente") ; err.response.data.message === "Token inv??lido!" && navigate("/") })
    }

    function removerHabito(h) {
        if (window.confirm("Deseja apagar o h??bito?") === true) {
            const url = (`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`)
            const promise = axios.delete(url, config)
            promise.then(res => listarHabitos())
            promise.catch(err => { console.log(err.response.data.message); err.response.data.message === "Token inv??lido!" && navigate("/") })
        }
    }

    return (
        <>
            <Topo />
            <StyledTelaHabitos>
                <div className="titulo">
                    <h1>Meus H??bitos</h1>
                    <button onClick={() => (formAberto ? setFormAberto(false) : setFormAberto(true))} data-test="habit-create-btn" className="mais">+</button>
                </div>
                {formAberto &&
                    <StyledAdicionarTarefa data-test="habit-create-container" clicado={clicado}>
                        <input data-test="habit-name-input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="nome do h??bito" disabled={carregando}></input>
                        <div className="checkbox">
                            {dias.map(d => (
                                <StyledBotaoForm key={d.id} data-test="habit-day" clicado={days.includes(d.id)} onClick={() => selecionarDia(d.id)} disabled={carregando}> {d.name} </StyledBotaoForm>
                            ))}
                        </div>
                        <div className="botoes">
                            <button data-test="habit-create-cancel-btn" className="cancelar" onClick={() => setFormAberto(false)}>Cancelar</button>
                            <button data-test="habit-create-save-btn" onClick={salvarHabito} >
                                {carregando ? <ThreeDots height="30" width="30" color="#FFFFFF" /> : "Salvar"}
                            </button>
                        </div>
                    </StyledAdicionarTarefa>}

                {habitos.length === 0 &&
                    <div className="habitos">
                        <h2>Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para come??ar a trackear!</h2>
                    </div>
                }

                {habitos.map(h => (
                    <Habito key={h.id} h={h} dias={dias} removerHabito={removerHabito}>
                    </Habito>
                ))}
            </StyledTelaHabitos>
            <Menu porcentagemConcluidos={porcentagemConcluidos} setPorcentagemConcluidos={setPorcentagemConcluidos} />
        </>
    )
}
