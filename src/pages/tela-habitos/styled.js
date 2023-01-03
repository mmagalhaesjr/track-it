import styled from "styled-components"
import { corFundoTela } from "../../constants/cores"

export const StyledTelaHabitos = styled.section`
min-height: 840px;
background-color: ${corFundoTela};
padding-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom:70px;

.titulo{
    width: 338px;
    display: flex;
    margin-top: 28px;
    margin-bottom: 20px;
}

h1{
    width: 340px;
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;
    line-height: 29px;
    display: flex;
    text-align: left;
}

h2{
    width: 340px;
    font-size: 18px;
    color: #666666;
    font-weight: 400;
    line-height: 23px;
    display: flex;
    margin-bottom: 28px;
}

.mais{
    width:40px;
    height: 35px;
    color:#ffffff;
    background-color: #52B6FF;
    display:flex;
    align-items: center;
    justify-content:center;
    font-size: 27px;
    border-radius: 5px;
}

`

export const StyledBotaoForm = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    display: block;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    background-color:${props => props.clicado ? "#d5d5d5" : "#ffffff"};
    background-color: ${props => props.disabled && "#EFEFEF4D"};
    color:${props => props.clicado ? "#ffffff" : "#d5d5d5"};

`

export const StyledAdicionarTarefa = styled.div`
width: 340px;
height: 180px;
background-color: #ffffff;
border-radius: 5px;
margin-bottom: 29px;
padding-top: 10px;

input {
   display: block;
   width: 303px;
   height: 45px;
   margin: 0 auto 7px;
   padding-left: 8px;
   border: 1px solid #d5d5d5;
   border-radius: 5px;
   font-size: 20px;
   ::placeholder {
     color: #d5d5d5;
   }
}
.checkbox{
    width: 303px;
    display: flex;
    margin-left: 20px;
}

.botoes{
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    margin-top: 29px;
}

.cancelar{
        background-color: #ffffff;
        color: #52B6FF;
    }
.botoes button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 5px;
}

`



