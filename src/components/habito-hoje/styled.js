import styled from "styled-components"
import { corConcluido } from "../../constants/cores"


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
    background-color: ${props => corConcluido[props.concluido].background}    ;
    margin-right: 13px;
}

`