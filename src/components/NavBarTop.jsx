import { useState } from "react";

//navbar recebe a mudança de seção
export default function NavBar({ secaoAtiva, onChangeSecao }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Sobre", "Habilidades", "Projetos"];

  return (
    <nav className="bg-[rgb(13,27,42)] text-[rgb(224,225,221)] p-5 font-serif">
      <div className="flex justify-between items-center">
        <div className="text-2xl">portfólio</div>

        {/* botão mobile */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden focus:outline-none"
          aria-label="menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* menu desktop */}
        <div className="hidden md:flex space-x-5 text-2xl">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                //onlick é o evento que ativa  atroca de função
                e.preventDefault();
                onChangeSecao(label); //executa a troca de seção
              }}
              className={
                `relative inline-block transition-transform hover:scale-105 ` +
                `after:content-[''] after:absolute after:left-0 after:bottom-0 ` +
                `after:w-full after:h-[1px] after:bg-[rgb(65,90,119)] ` +
                `after:origin-left after:transition-transform after:duration-300 ` +
                (secaoAtiva === label //deixa troca cor do botão da seção atual
                  ? "text-[rgb(65,90,119)] after:scale-x-100"
                  : "hover:text-[rgb(65,90,119)] after:scale-x-0")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* menu mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-2xl">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onChangeSecao(label);
                setIsOpen(false);
              }}
              className={
                `block transition-colors ` +
                (secaoAtiva === label
                  ? "text-[rgb(65,90,119)]"
                  : "hover:text-[rgb(65,90,119)]")
              }
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
