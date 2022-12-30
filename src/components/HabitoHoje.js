import styled from "styled-components"

export default function HabitoHoje() {

    return (
        <StyledHabitoHoje data-test="today-habit-container" concluido={true} >
            <div className="info">
                <h3 data-test="today-habit-name">Correr</h3>
                <h4 data-test="today-habit-sequence">Sequência atual: {3} dias</h4>
                <h4 data-test="today-habit-record">Seu recorde: {4} dias</h4>
            </div>
            <ion-icon data-test="today-habit-check-btn" name="checkmark-outline"></ion-icon>
        </StyledHabitoHoje>
    )
}

export const StyledHabitoHoje = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 340px;
height: 94px;
background-color: #ffffff;
border-radius: 5px;
margin-bottom: 10px;

ion-icon{
    width: 69px;
    height: 69px;
    color: #ffffff ;
    background-color: ${props => props.concluido ? "green" : "#E5E5E5"}    ;
    margin-right: 13px;
}

`