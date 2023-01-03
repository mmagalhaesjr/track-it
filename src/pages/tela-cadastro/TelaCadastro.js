import logo from '../../assets/media/logo.png'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { StyledTelaCadastro, StyledInput } from './styled';
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner';

export default function TelaCadastro() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [carregando, setCarregando] = useState(false)

  function cadastrarUsuario(e) {
    e.preventDefault()
    setCarregando(true)

    const body = {

      email: email,
      name: name,
      image: image,
      password: password
    }
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const promise = axios.post(url, body)

    promise.then(() => {navigate("/")})
    promise.catch(err => {alert(err.response.data.message); setCarregando(false)})

  }

  return (
    <StyledTelaCadastro>
      < img src={logo} alt="imagem logo" />
      <form onSubmit={cadastrarUsuario}>
        <StyledInput data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='email' disabled={carregando} required />
        <StyledInput data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='senha' disabled={carregando} required />
        <StyledInput data-test="user-name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder='nome' disabled={carregando} required />
        <StyledInput data-test="user-image-input" type="url" value={image} onChange={e => setImage(e.target.value)} placeholder='foto' disabled={carregando} required />
        <button data-test="signup-btn" type="submit" disabled={carregando}>
        {carregando ? <ThreeDots height="50" width="50" color="#FFFFFF"/> : "CADASTRAR"}</button>
      </form>
      <Link data-test="login-link" to="/"> <h6> Já tem uma conta? Faça login! </h6> </Link>
    </StyledTelaCadastro>
  )
}