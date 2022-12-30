import { Link } from "react-router-dom"
import { StyledFooter } from "./styled"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
  const porcentagemConcluidos = 100
  
  return (
    <StyledFooter data-test="menu">
      <Link data-test="habit-link" to='/habitos' >
        <h3>Hábitos</h3>
      </Link>
      <Link data-test="today-link" to='/hoje'>
        <button><CircularProgressbar value={porcentagemConcluidos.toFixed(0)} text="HOJE" styles={buildStyles({ textColor: '#ffffff', pathColor: '#ffffff', trailColor: "none" })} /> </button>
      </Link>
      <Link data-test="history-link" to='/historico'>
        <h3>Histórico</h3>
      </Link>

    </StyledFooter>
  )
}

