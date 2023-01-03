import logo from '../../assets/media/logo.png'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { StyledTelaLogin, StyledInput } from "./styled"
import axios from "axios"
import UserContext from '../../contexts/UserContext';

export default function TelaLogin() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  function logarUsuario(e) {
    e.preventDefault()

    const body = {
      email: email,
      password: password
    }

    const url = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login')
    const promise = axios.post(url, body)
    promise.then((res) => {setUser({name: res.data.name, image: res.data.image, token: res.data.token}); navigate('/hoje')})
    promise.catch(err => alert(err.response.data.message))
  }

  return (
    <StyledTelaLogin>
      <form onSubmit={logarUsuario}>
        <img src={logo} alt="Logo" />
        <StyledInput
          data-test="email-input"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="email" />

        <StyledInput
          data-test="password-input"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="senha" />

        <button data-test="login-btn">ENTRAR</button>

      </form>
      <Link data-test="signup-link" to="/cadastro"> <p>Não tem uma conta? Cadastre-se!</p> </Link>
    </StyledTelaLogin>
  )
}
