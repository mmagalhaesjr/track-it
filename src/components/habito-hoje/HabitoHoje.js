import { StyledHabitoHoje } from "./styled"

export default function HabitoHoje({h, alterarStatusHabito}) {

    return (
        <StyledHabitoHoje data-test="today-habit-container" concluido={h.done} key={h.id} >
            <div className="info">
                <h3 data-test="today-habit-name">{h.name}</h3>
                <h4 data-test="today-habit-sequence">Sequência atual: {h.currentSequence} dias</h4>
                <h4 data-test="today-habit-record">Seu recorde: {h.highestSequence} dias</h4>
            </div>
            <ion-icon data-test="today-habit-check-btn" onClick={() => (alterarStatusHabito(h))} name="checkmark-outline"></ion-icon>
        </StyledHabitoHoje>
    )
}
