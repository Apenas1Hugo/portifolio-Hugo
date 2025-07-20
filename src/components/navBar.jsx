import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  //use state para controlar o menu mobile
  const links = ['Sobre', 'Habilidades', 'Projetos']; //links do menu

  return (
    <nav className="bg-[rgb(13,27,42)] text-[rgb(224,225,221)] p-5 font-serif">
      
      <div className="flex justify-between items-center">
        <div className="text-2xl">portifólio</div>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none" //torna o botão invisivel na quebra
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
                strokeLinejoin="round"       //"imagens do menu aberto e fechado"
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

            {/*mapeamento dos links */}
        <div className="hidden md:flex space-x-5 text-2xl transition duration-300">
          {links.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative inline-block hover:scale-105 hover:text-[rgb(65,90,119)]
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:w-full after:h-[1px] after:bg-[rgb(65,90,119)]
                         after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                         hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-2xl"> {/*mapeamento dos links mobile */}
          {links.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block transition-colors hover:text-[rgb(65,90,119)]"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
