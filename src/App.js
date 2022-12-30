import TelaCadastro from "./pages/tela-cadastro/TelaCadastro";
import TelaLogin from "./pages/tela-login/TelaLogin";
import TelaHabitos from "./pages/tela-habitos/TelaHabitos"
import TelaHistorico from "./pages/tela-historico/TelaHistorico"
import TelaHoje from "./pages/tela-hoje/TelaHoje"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [user, setUser] = useState({})
console.log(user)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/habitos" element={<TelaHabitos/>} />
            <Route path="/hoje" element={<TelaHoje/>} />
            <Route path="/historico" element={<TelaHistorico/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider >
  )
}


