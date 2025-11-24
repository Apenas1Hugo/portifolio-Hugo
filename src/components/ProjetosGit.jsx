import React from "react";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; //icones
import { SiTailwindcss, SiVite } from "react-icons/si";
import { LuNetwork } from "react-icons/lu";

const techIcons = {
  html: <FaHtml5 size={30} className="text-orange-500" />,
  css: <FaCss3Alt size={30} className="text-blue-500" />,
  javascript: <FaJs size={30} className="text-yellow-400" />,
  react: <FaReact size={30} className="text-cyan-400" />,
  tailwind: <SiTailwindcss size={30} className="text-sky-400" />,
  vite: <SiVite size={30} className="text-purple-400" />,
  api: <LuNetwork size={30} className="text-green-400" />,
};

const projects = [
  {
    id: 1,
    titulo: "To-do-list",
    texto: "Um To-do list simples criada com HTML, CSS e JavaScript",
    link: "https://github.com/Apenas1Hugo/To-do-list",
    tech: ["html", "css", "javascript"],
  },
  {
    id: 2,
    titulo: "Portifólio",
    texto: "Simples portifólio criado usando React e Tailwind",
    link: "https://github.com/Apenas1Hugo/portifolio-Hugo",
    tech: ["react", "tailwind", "vite"],
  },
  {
    id: 3,
    titulo: "MovieSearch",
    texto:
      "Interface web interativa construída com React que permite ao usuário pesquisar filmes rapidamente usando dados da API do The Movie Database.",
    link: "https://github.com/Apenas1Hugo/MovieSearch-TMDB",
    tech: ["react", "css", "vite", "api"],
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="
        bg-[rgb(65,90,119)]
        p-8 mx-auto max-w-4xl
        rounded-xl mt-8 pb-14
        mb-15
      "
    >
      <h2 className="text-3xl font-serif text-[rgb(224,225,221)] mb-6 text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, titulo, texto, link, tech }) => (
          <div
            key={id}
            className="
              flex flex-col
              bg-[rgb(26,40,56)]
              rounded-lg shadow-lg overflow-visible
            "
          >
            {/* Area dos ícones */}
            <div className="flex gap-4 justify-center items-center py-6 bg-[rgb(45,61,78)]">
              {tech.map((t) => (
                <div key={t} className="relative group">
                  {techIcons[t]}

                  <span
                    className="
                      absolute left-1/2 -translate-x-1/2 -top-8
                      bg-black text-white text-xs px-2 py-1 rounded
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                      pointer-events-none
                      whitespace-nowrap
      "
                  >
                    {t.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[rgb(224,225,221)] mb-2">
                {titulo}
              </h3>
              <p className="text-[rgb(224,225,221)] flex-grow">{texto}</p>

              <a
                href={link}
                target="_blank"
                className="
                  mt-4
                  inline-flex items-center justify-center
                  bg-[rgb(65,90,119)]
                  hover:bg-[rgb(119,141,169)]
                  text-[rgb(224,225,221)]
                  px-4 py-2 rounded
                  transition-colors
                "
              >
                <FaGithub className="mr-2" />
                Acesse o repositório
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
