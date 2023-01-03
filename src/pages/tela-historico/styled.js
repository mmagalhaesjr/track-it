import styled from "styled-components"
import { corFundoTela } from "../../constants/cores"

export const StyledTelaHistorico = styled.section`
min-height: 840px;
background-color: ${corFundoTela};
padding-top: 70px;
display: flex;
flex-direction: column;
align-items: center;

h1{
    width: 340px;
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;
    line-height: 29px;
    display: flex;
    text-align: left;
    margin-top: 28px;
    margin-bottom: 20px;
}

h2{
    width: 340px;
    font-size: 18px;
    color: #666666;
    font-weight: 400;
    line-height: 23px;
    display: flex;
}
`

