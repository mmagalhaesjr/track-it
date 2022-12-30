import styled from "styled-components"

export default function Habito({ dias }) {

    return (
        <StyledHabito data-test="habit-container">
            <p>Correr</p>
            <div className="semana">
                {dias.map(d => (
                    <StyledBotao data-test="habit-day" selecionado={true}>{d.name}</StyledBotao>
                ))}
                <ion-icon data-test="habit-delete-btn" name="trash-outline"></ion-icon>
            </div>
        </StyledHabito>
    )
}

export const StyledHabito = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 340px;
height: 94px;
background-color: #ffffff;
border-radius: 5px;
margin-bottom: 10px;

.semana{
    width: 303px;
    display: flex;
    margin-left: 20px;

}
p{
    width: 340px;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top:10px;
    margin-left:55px;
}

ion-icon{
    width: 25px;
    height: 25px;
    margin-right: 13px;
    color:#000;
    background-color:;
    margin-left:50px;
    margin-top:-30px;

}
`
export const StyledBotao = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    display: block;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    background-color:${props => props.selecionado ? "#d5d5d5" : "#ffffff"};
    color:${props => props.selecionado ? "#ffffff" : "#d5d5d5"};
    margin-bottom:20px;

`