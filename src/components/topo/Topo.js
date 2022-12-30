import { StyledHeader } from "./styled"
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Topo() {
  const {user} = useContext(UserContext)
  return (
    <StyledHeader data-test="header">
      <Link to='/hoje'>
        <h1>Tracklt</h1>
      </Link>
      <img src={user.image} alt="foto" />
    </StyledHeader>
  )
}