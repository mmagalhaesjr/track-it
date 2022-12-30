import styled from "styled-components"

export const StyledTelaHoje = styled.div`
min-height: 840px;
background-color: #E5E5E5;
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
}

h2{
    width: 340px;
    font-size: 18px;
    color: ${props => props.numeroConcluidos === 0 ? "#BABABA" : "#8FC549"};
    font-weight: 400;
    line-height: 23px;
    display: flex;
    margin-bottom: 28px;
}

h3{
    
    font-size: 20px;
    color: #666666;
    font-weight: 400;
    line-height: 25px;
}

h4{
    font-size: 13px;
    color: #666666;
}

.info {
    height: 69px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`