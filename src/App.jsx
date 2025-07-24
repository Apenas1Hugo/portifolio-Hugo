import { useState } from "react";
import NavBar from "./components/NavBar";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/projetos";
import Contatos from "./components/contatos";

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
