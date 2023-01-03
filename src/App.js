import TelaCadastro from "./pages/tela-cadastro/TelaCadastro";
import TelaLogin from "./pages/tela-login/TelaLogin";
import TelaHabitos from "./pages/tela-habitos/TelaHabitos"
import TelaHistorico from "./pages/tela-historico/TelaHistorico"
import TelaHoje from "./pages/tela-hoje/TelaHoje"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";

export default function App() {
  const [user, setUser] = useState({name: 'jhujhu', image: 'https://tse4.mm.bing.net/th?id=OIP.LIIAoCSSGv8EBsV99qeOyAHaE8&pid=Api&P=0', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzMzO…jQwfQ.k4F8EpqDz61FLN3NxvGTzGAiBl6LXwK0ejrFInnMSzU'})
  const [porcentagemConcluidos, setPorcentagemConcluidos] = useState(0)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProgressContext.Provider value={{ porcentagemConcluidos, setPorcentagemConcluidos }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<TelaLogin />} />
              <Route path="/cadastro" element={<TelaCadastro />} />
              <Route path="/habitos" element={<TelaHabitos />} />
              <Route path="/hoje" element={<TelaHoje />} />
              <Route path="/historico" element={<TelaHistorico />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ProgressContext.Provider>
    </UserContext.Provider >
  )
}


