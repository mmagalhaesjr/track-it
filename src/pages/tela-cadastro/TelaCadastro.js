import logo from '../../assets/media/logo.png'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { StyledTelaCadastro, StyledInput } from './styled';
import axios from "axios"

export default function TelaCadastro() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function cadastrarUsuario(e) {
    e.preventDefault()

    const body = {

      email: email,
      name: name,
      image: image,
      password: password
    }
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const promise = axios.post(url, body)

    promise.then(() => navigate("/"))
    promise.catch(err => alert(err.response.data.message))

  }

  return (
    <StyledTelaCadastro>
      < img src={logo} alt="imagem logo" />
      <form onSubmit={cadastrarUsuario}>
        <StyledInput data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='email' required />
        <StyledInput data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='senha' required />
        <StyledInput data-test="user-name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder='nome' required />
        <StyledInput data-test="user-image-input" type="url" value={image} onChange={e => setImage(e.target.value)} placeholder='foto' required />
        <button data-test="signup-btn" type="submit">CADASTRAR</button>
      </form>
      <Link data-test="login-link" to="/"> <h6> Já tem uma conta? Faça login! </h6> </Link>
    </StyledTelaCadastro>
  )
}