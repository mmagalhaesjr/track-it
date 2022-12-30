import { StyledHeader } from "./styled"
import { Link } from "react-router-dom";

export default function Topo() {

  return (
    <StyledHeader data-test="header">
      <Link to='/hoje'>
        <h1>Tracklt</h1>
      </Link>
      <img src="https://tse1.mm.bing.net/th?id=OIP.HWcSJoTzIbuNemITS4SX8wHaHa&pid=Api&P=0" alt="foto" />
    </StyledHeader>
  )
}