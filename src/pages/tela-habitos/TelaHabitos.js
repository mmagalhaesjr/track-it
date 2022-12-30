import Topo from "../../components/topo/Topo"
import Menu from "../../components/menu/Menu"
import { StyledAdicionarTarefa, StyledTelaHabitos, StyledBotaoForm } from "./styled"
import { useState } from "react"

export default function TelaHabitos() {
    const [name, setName] = useState('')
    const [days, setDays] = useState([])
    const [formAberto, setFormAberto] = useState(false)
    const dias = [{ name: "D", id: 0 }, { name: "S", id: 1 }, { name: "T", id: 2 }, { name: "Q", id: 3 }, { name: "Q", id: 4 }, { name: "S", id: 5 }, { name: "S", id: 6 }]

    function selecionarDia(id) {
        if (days.includes(id)) {
            setDays(days.filter(d => d !== id))
        } else {
            setDays([...days, id])
        }
    }

    return (
        <>
            <Topo />
            <StyledTelaHabitos>
                <div className="titulo">
                    <h1>Meus Hábitos</h1>
                    <button onClick={() => (formAberto ? setFormAberto(false) : setFormAberto(true))} data-test="habit-create-btn" className="mais">+</button>
                </div>
                {formAberto &&
                    <StyledAdicionarTarefa data-test="habit-create-container" >
                        <input data-test="habit-name-input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="nome do hábito"></input>
                        <div className="checkbox">
                            {dias.map(d => (
                                <StyledBotaoForm key={d.id} data-test="habit-day" clicado={days.includes(d.id)} onClick={() => selecionarDia(d.id)}>{d.name}</StyledBotaoForm>
                            ))}
                        </div>
                        <div className="botoes">
                            <button data-test="habit-create-cancel-btn" className="cancelar" onClick={() => setFormAberto(false)}>Cancelar</button>
                            <button data-test="habit-create-save-btn" >Salvar</button>
                        </div>
                    </StyledAdicionarTarefa>}

                <div className="habitos">
                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                </div>

            </StyledTelaHabitos>
            <Menu />
        </>
    )
}
