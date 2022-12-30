
import logo from '../../assets/media/logo.png'
import { useState } from "react"
import { Link} from "react-router-dom";
import { StyledTelaCadastro, StyledInput } from './styled';

export default function TelaCadastro() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [password, setPassword] = useState('')

  return (
    <StyledTelaCadastro>
      < img src={logo} alt="imagem logo" />
      <form>
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