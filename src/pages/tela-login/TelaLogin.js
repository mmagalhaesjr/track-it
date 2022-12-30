import logo from '../../assets/media/logo.png'
import { useState } from "react"
import { Link } from "react-router-dom";
import { StyledTelaLogin, StyledInput } from "./styled"

export default function TelaLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <StyledTelaLogin>
      <form>
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
        <Link to="/hoje"><button data-test="login-btn">ENTRAR</button></Link>


      </form>
      <Link data-test="signup-link" to="/cadastro"> <p>Não tem uma conta? Cadastre-se!</p> </Link>
    </StyledTelaLogin>
  )
}
