import { StyledHabito, StyledBotao } from "./styled"

export default function Habito({ h, removerHabito, dias }) {

    return (
        <StyledHabito data-test="habit-container">
            <p>{h.name}</p>
            <div>
                {dias.map(d => (
                    <StyledBotao key={d.id} data-test="habit-day" selecionado={h.days.includes(d.id)}>{d.name}</StyledBotao>
                ))}
                <ion-icon data-test="habit-delete-btn" onClick={() => removerHabito(h)} name="trash-outline"></ion-icon>
            </div>
        </StyledHabito>
    )
}

