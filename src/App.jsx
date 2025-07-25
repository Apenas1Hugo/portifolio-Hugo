import { useState } from "react";
import NavBar from "./components/NavBarTop";
import Sobre from "./components/SobreMim";
import Habilidades from "./components/HabilidadesTec";
import Projetos from "./components/ProjetosGit";
import Contatos from "./components/Contato";

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState("Sobre");

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar secaoAtiva={secaoAtiva} onChangeSecao={setSecaoAtiva} />

      <main className="flex-grow">
        {secaoAtiva === "Sobre" && <Sobre />}
        {secaoAtiva === "Habilidades" && <Habilidades />}
        {secaoAtiva === "Projetos" && <Projetos />}
      </main>
      <Contatos/>
    </div>
  );
}
