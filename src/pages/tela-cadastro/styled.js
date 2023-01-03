import styled from "styled-components"

export const StyledTelaCadastro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img {
    display: block;
    width: 180px;
    height: 178px;
    margin: 68px auto 35px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    background-color: #52b6ff;
    color: #ffffff;
    font-size: 21px;
    border: none;
    border-radius: 5px;
    
  }

  a {
    display: block;
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
    
  }
`

export const StyledInput = styled.input`
    display: block;
    width: 303px;
    height: 45px;
    margin: 0 auto 7px;
    padding-left: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    color: ${props => props.disabled ? "#AFAFAF" : "#666666"} ; 

    ::placeholder {
      color: #dbdbdb;
    }
`